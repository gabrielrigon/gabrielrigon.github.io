import { renderToString } from 'react-dom/server'
import { describe, expect, it } from 'vitest'

import { absoluteUrl } from '../config/site'
import App from './App'
import { renderHead } from './head'
import { ROUTES } from './routes'

describe.each(ROUTES)('$path', route => {
  const html = renderToString(<App pathname={route.path} />)
  const head = renderHead(route)

  it('has exactly one <h1> and a skip link to the main landmark', () => {
    expect(html.match(/<h1[\s>]/g)).toHaveLength(1)
    expect(html).toContain('href="#content"')
    expect(html).toContain('<main id="content"')
  })

  it('opens external links without opener or referrer', () => {
    for (const [anchor] of html.matchAll(/<a [^>]*target="_blank"[^>]*>/g)) {
      expect(anchor).toContain('rel="noopener noreferrer"')
    }
  })

  it('gives every image alt text and intrinsic dimensions', () => {
    for (const [img] of html.matchAll(/<img [^>]*>/g)) {
      expect(img).toMatch(/ alt="[^"]+"/)
      expect(img).toMatch(/ width="\d+"/)
      expect(img).toMatch(/ height="\d+"/)
    }
  })

  it('has a title and description, and is indexable unless marked noindex', () => {
    expect(head).toContain(`<title>`)
    expect(head).toContain('name="description"')
    expect(head.includes('rel="canonical"')).toBe(!route.noindex)
    expect(head.includes('noindex')).toBe(Boolean(route.noindex))
  })
})

describe('structured data', () => {
  const graphOf = route => {
    const [, json] = renderHead(route).match(/<script type="application\/ld\+json">(.*)<\/script>/)
    return JSON.parse(json)['@graph']
  }

  it('describes the home page as the profile of the person', () => {
    const page = graphOf(ROUTES[0]).find(node => node['@type'] === 'ProfilePage')
    expect(page.mainEntity['@id']).toMatch(/#person$/)
  })

  it('gives every indexable page its own node, and no @id twice', () => {
    for (const route of ROUTES.filter(r => !r.noindex)) {
      const graph = graphOf(route)
      expect(graph[0]['@id']).toBe(`${absoluteUrl(route.path)}#webpage`)
      const ids = graph.map(node => node['@id'])
      expect(new Set(ids).size).toBe(ids.length)
    }
  })
})

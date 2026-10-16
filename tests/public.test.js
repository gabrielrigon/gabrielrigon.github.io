/* Hand-maintained files in public/, and the CSP, must agree with the code. */
import { readFileSync } from 'node:fs'
import { describe, expect, it } from 'vitest'

import { renderHead } from '../src/app/head'
import { ROUTES } from '../src/app/routes'
import { CONTENT_SECURITY_POLICY } from '../src/config/security'
import { absoluteUrl } from '../src/config/site'
import { escapeHtml } from '../src/lib/html'

const read = file => readFileSync(new URL(`../public/${file}`, import.meta.url), 'utf8')

describe('public/', () => {
  it('sitemap.xml lists exactly the indexable routes', () => {
    const locs = [...read('sitemap.xml').matchAll(/<loc>([^<]+)<\/loc>/g)].map(match => match[1])
    const indexable = ROUTES.filter(route => !route.noindex).map(route => absoluteUrl(route.path))
    expect(locs.sort()).toEqual(indexable.sort())
  })

  it('robots.txt points at the sitemap', () => {
    expect(read('robots.txt')).toContain(`Sitemap: ${absoluteUrl('/sitemap.xml')}`)
  })

  it('every page carries the CSP from src/config/security.js', () => {
    const meta = `<meta http-equiv="Content-Security-Policy" content="${escapeHtml(CONTENT_SECURITY_POLICY)}" />`
    for (const route of ROUTES) expect(renderHead(route)).toContain(meta)
  })
})

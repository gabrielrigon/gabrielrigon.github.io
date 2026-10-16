import { describe, expect, it } from 'vitest'

import { escapeHtml, serializeJsonForScript } from './html'

describe('escapeHtml', () => {
  it('escapes markup and both quote styles', () => {
    expect(escapeHtml(`<a href="x" title='y'>&</a>`)).toBe(
      '&lt;a href=&quot;x&quot; title=&#39;y&#39;&gt;&amp;&lt;/a&gt;',
    )
  })
})

describe('serializeJsonForScript', () => {
  it('cannot close the surrounding <script>', () => {
    const json = serializeJsonForScript({ name: '</script><script>alert(1)</script>' })
    expect(json).not.toContain('</script>')
    expect(JSON.parse(json).name).toBe('</script><script>alert(1)</script>')
  })
})

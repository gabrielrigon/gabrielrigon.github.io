import { SITE, absoluteUrl } from '../config/site'
import { CONTENT_SECURITY_POLICY } from '../config/security'
import { STRUCTURED_DATA } from '../config/structuredData'
import { escapeHtml, serializeJsonForScript } from '../lib/html'

const meta = (attr, key, content) => `<meta ${attr}="${key}" content="${escapeHtml(content)}" />`

/** The per-route <head> tags, as an HTML string for the prerender. */
export function renderHead(route) {
  const url = absoluteUrl(route.path)
  const image = absoluteUrl(SITE.ogImage.path)

  const tags = [
    SITE.cspMeta && meta('http-equiv', 'Content-Security-Policy', CONTENT_SECURITY_POLICY),
    meta('name', 'referrer', 'strict-origin-when-cross-origin'),
    `<title>${escapeHtml(route.title)}</title>`,
    meta('name', 'description', route.description),
    meta('name', 'author', SITE.name),
  ]

  if (route.noindex) return [...tags, meta('name', 'robots', 'noindex')].filter(Boolean).join('\n')

  return [
    ...tags,
    `<link rel="canonical" href="${escapeHtml(url)}" />`,
    meta('property', 'og:type', 'profile'),
    meta('property', 'og:locale', SITE.ogLocale),
    meta('property', 'og:site_name', SITE.name),
    meta('property', 'og:title', route.title),
    meta('property', 'og:description', route.description),
    meta('property', 'og:url', url),
    meta('property', 'og:image', image),
    meta('property', 'og:image:width', SITE.ogImage.width),
    meta('property', 'og:image:height', SITE.ogImage.height),
    meta('property', 'og:image:alt', SITE.ogImage.alt),
    meta('name', 'twitter:card', 'summary_large_image'),
    meta('name', 'twitter:title', route.title),
    meta('name', 'twitter:description', route.description),
    meta('name', 'twitter:image', image),
    `<script type="application/ld+json">${serializeJsonForScript(STRUCTURED_DATA)}</script>`,
  ]
    .filter(Boolean)
    .join('\n')
}

/** A static page that forwards an old URL, for hosts that can't answer with a 301. */
export function renderRedirect({ to }) {
  const target = escapeHtml(absoluteUrl(to))
  return `<!doctype html>
<html lang="${SITE.lang}">
<head>
<meta charset="utf-8" />
<meta name="robots" content="noindex" />
<meta http-equiv="refresh" content="0; url=${target}" />
<link rel="canonical" href="${target}" />
<title>Moved</title>
</head>
<body><p>This page moved to <a href="${target}">${target}</a>.</p></body>
</html>
`
}

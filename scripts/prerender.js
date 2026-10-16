/**
 * Turns the two Vite builds into a static site, one HTML file per route:
 *
 *   build/      client build: the stylesheet, fonts and images, plus the HTML template
 *   build-ssr/  server build: renders a route to an HTML string with react-dom/server
 *
 * The pages have no interactive state, so the output ships no JavaScript at all: the client
 * bundle is only the vehicle Vite uses to collect the CSS, and it is removed from the output.
 * Crawlers, link previews and readers without JavaScript all get the full content.
 */
import { readdir, readFile, rm, writeFile } from 'node:fs/promises'
import path from 'node:path'
import { fileURLToPath, pathToFileURL } from 'node:url'

const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..')
const CLIENT_DIR = path.join(ROOT, 'build')
const SERVER_DIR = path.join(ROOT, 'build-ssr')
const ASSETS_DIR = path.join(CLIENT_DIR, 'assets')

/* The fonts above the fold: the display face of the <h1> and the body face. */
const PRELOAD_FONTS = [
  /^instrument-sans-latin-wght-normal-.+\.woff2$/,
  /^inter-latin-wght-normal-.+\.woff2$/,
]

const fail = message => {
  throw new Error(`prerender: ${message}`)
}

/** Replaces a placeholder exactly once; a function replacement keeps "$" in content literal. */
const fill = (html, placeholder, value) => {
  if (!html.includes(placeholder)) fail(`placeholder ${placeholder} missing from the template`)
  return html.replace(placeholder, () => value)
}

async function loadTemplate(assetFiles) {
  const template = await readFile(path.join(CLIENT_DIR, 'index.html'), 'utf8')

  const fontPreloads = PRELOAD_FONTS.map(pattern => {
    const file = assetFiles.find(name => pattern.test(name)) ?? fail(`no font matches ${pattern}`)
    return `<link rel="preload" href="/assets/${file}" as="font" type="font/woff2" crossorigin />`
  })

  return template
    .replace(/\s*<script type="module"[^>]*><\/script>/g, '')
    .replace(/\s*<link rel="modulepreload"[^>]*>/g, '')
    .replace('<!--app-head-->', () => `<!--app-head-->\n${fontPreloads.join('\n')}`)
}

async function removeClientScripts(assetFiles) {
  const scripts = assetFiles.filter(name => name.endsWith('.js'))
  await Promise.all(scripts.map(name => rm(path.join(ASSETS_DIR, name))))
  return scripts.length
}

async function main() {
  const server = await import(pathToFileURL(path.join(SERVER_DIR, 'entry-server.js')).href)
  const assetFiles = await readdir(ASSETS_DIR)
  const template = await loadTemplate(assetFiles)

  for (const route of server.ROUTES) {
    const body = server.render(route.path)
    if (!/<h1[\s>]/.test(body)) fail(`${route.path} rendered without an <h1>`)

    let html = fill(template, '<!--app-head-->', server.renderHead(route))
    html = fill(html, '<!--app-html-->', body)
    await writeFile(path.join(CLIENT_DIR, route.file), html)
    console.log(`  ${route.path} → ${route.file}`)
  }

  for (const redirect of server.REDIRECTS) {
    const file = `${redirect.from.replace(/^\//, '')}.html`
    await writeFile(path.join(CLIENT_DIR, file), server.renderRedirect(redirect))
    console.log(`  ${redirect.from} ⇢ ${redirect.to} (${file})`)
  }

  const removed = await removeClientScripts(assetFiles)
  await rm(SERVER_DIR, { recursive: true, force: true })
  console.log(`prerender: ${server.ROUTES.length} page(s), ${removed} client script(s) dropped`)
}

main().catch(error => {
  console.error(error)
  process.exit(1)
})

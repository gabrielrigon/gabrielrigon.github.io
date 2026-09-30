/**
 * Indexadores que não executam JavaScript (e alguns crawlers de rede social)
 * leriam apenas a <div id="root"></div> vazia, já que o site é uma SPA.
 *
 * Isto renderiza cada rota no próprio Node, com react-dom/server, e grava o
 * HTML final (conteúdo e CSS do styled-components já no documento) como um
 * arquivo estático por rota: / vira index.html e /projects vira projects.html,
 * que o Cloudflare Pages serve em /projects, sem barra no fim. O React assume
 * a partir daí normalmente.
 *
 * Antes isto abria um Chrome headless via Puppeteer, mas o puppeteer exige
 * Node 22.12+ e o Chrome precisa de bibliotecas de sistema que o build do
 * Cloudflare Pages não garante. O deploy falhava e a produção ficava presa
 * num build antigo. Renderizar no Node não depende de nada disso.
 */
const fs = require('fs')
const path = require('path')
const Module = require('module')

process.env.NODE_ENV = 'production'
// Em modo test o preset do CRA compila para CommonJS no Node atual.
process.env.BABEL_ENV = 'test'

const babel = require('@babel/core')

const ROOT = path.join(__dirname, '..')
const SRC = path.join(ROOT, 'src')
const BUILD = path.join(ROOT, 'build')
const ORIGIN = 'https://gabrielrigon.com.br'

const manifest = require(path.join(BUILD, 'asset-manifest.json')).files

// Hooks de require: JSX e ESM de src/ passam pelo Babel, CSS é ignorado e
// imagens viram a URL com hash que o build do CRA gerou.
const compileJs = Module._extensions['.js']
Module._extensions['.js'] = (mod, filename) => {
  if (!filename.startsWith(SRC)) return compileJs(mod, filename)
  const { code } = babel.transformFileSync(filename, {
    babelrc: false,
    configFile: false,
    presets: [require.resolve('babel-preset-react-app')],
  })
  mod._compile(code, filename)
}
Module._extensions['.css'] = () => {}
for (const ext of ['.jpg', '.jpeg', '.png', '.svg', '.webp']) {
  Module._extensions[ext] = (mod, filename) => {
    const url = manifest[`static/media/${path.basename(filename)}`]
    if (!url) throw new Error(`prerender: ${filename} não está no asset-manifest`)
    mod.exports = { __esModule: true, default: url }
  }
}

const React = require('react')
const { renderToString } = require('react-dom/server')
const { StaticRouter } = require('react-router-dom/server')
const { ServerStyleSheet } = require('styled-components')
const App = require(path.join(SRC, 'App')).default
const routes = require(path.join(SRC, 'utils', 'routeMeta.json'))

const esc = s => s.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/"/g, '&quot;')

const swap = (src, pattern, value) => {
  if (!pattern.test(src)) throw new Error(`prerender: não encontrei ${pattern}`)
  // Função em vez de string para um "$" no texto não virar referência de grupo.
  return src.replace(pattern, (...m) => (typeof m[1] === 'string' ? m[1] : '') + value)
}

const template = fs.readFileSync(path.join(BUILD, 'index.html'), 'utf8')

let written = 0

for (const [route, meta] of Object.entries(routes)) {
  const sheet = new ServerStyleSheet()
  let rootHtml
  let styles
  try {
    const app = React.createElement(App, { Router: StaticRouter, location: route })
    rootHtml = renderToString(sheet.collectStyles(app))
    styles = sheet.getStyleTags()
  } finally {
    sheet.seal()
  }

  if (!/<h1[\s>]/.test(rootHtml)) throw new Error(`prerender: ${route} saiu sem <h1>`)

  const title = esc(meta.title)
  const description = esc(meta.description)
  const url = ORIGIN + route

  let out = template
  out = swap(out, /<title>[^<]*<\/title>/, `<title>${title}</title>`)
  out = swap(out, /(<meta name="description" content=")[^"]*"/, `${description}"`)
  out = swap(out, /(<meta property="og:title" content=")[^"]*"/, `${title}"`)
  out = swap(out, /(<meta property="og:description" content=")[^"]*"/, `${description}"`)
  out = swap(out, /(<meta name="twitter:title" content=")[^"]*"/, `${title}"`)
  out = swap(out, /(<meta name="twitter:description" content=")[^"]*"/, `${description}"`)
  out = swap(out, /(<meta property="og:url" content=")[^"]*"/, `${url}"`)
  out = swap(out, /(<link rel="canonical" href=")[^"]*"/, `${url}"`)
  out = swap(out, /<\/head>/, `${styles}</head>`)
  out = swap(out, /<div id="root"><\/div>/, `<div id="root">${rootHtml}</div>`)

  const file = route === '/' ? 'index.html' : `${route.replace(/^\//, '')}.html`
  fs.writeFileSync(path.join(BUILD, file), out)
  written++
  console.log(`  pré-renderizado ${route} → ${file}`)
}

console.log(`prerender: ${written} rota(s)`)

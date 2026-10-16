### gabrielrigon.github.io

My personal website, built with React 19 and Vite and published as static HTML on GitHub Pages.

Every page is rendered at build time and ships **no JavaScript**: just HTML, one stylesheet and
self-hosted fonts (Fontsource).

#### Development

Requires Node 22.12+ (see `.nvmrc`).

```sh
npm install
npm run dev        # dev server on http://localhost:5173
npm run build      # production site in build/
npm run preview    # serve build/ locally
npm run check      # lint + format check + tests + build (what CI runs)
```

#### Structure

```
src/
  app/          App, the route table (single source of pages) and each page's <head>
  config/       site settings, JSON-LD and the Content-Security-Policy
  content/      copy and data: profile, home, projects (no UI)
  features/     one folder per page (home, projects, not-found) with its sections
  ui/           reusable presentational components, each with its own CSS Module
  lib/          pure helpers (formatting, HTML escaping), unit tested
  styles/       design tokens (CSS custom properties), global styles and fonts
scripts/
  prerender.js  combines the client and SSR builds and writes one HTML file per route
tests/          checks that sitemap, robots and the CSP agree with the code
```

Dependencies point inwards: `features` use `ui`, `content` and `config`; `ui` knows nothing
about content; `content` and `lib` don't import React.

`npm run build` runs the client build, the SSR build and then `scripts/prerender.js`, which
renders every route in `src/app/routes.js` with `react-dom/server`, builds its `<head>` (title,
description, canonical, Open Graph, JSON-LD, CSP) and writes `index.html`, `projects.html`,
`404.html` and a forwarding page for `/recent-projects`. The client JavaScript bundle is dropped,
since the pages have no interactive state.

A new route goes into `src/app/routes.js`, `public/sitemap.xml` and `public/llms.txt`;
`npm test` fails if the sitemap and the routes disagree.

#### Deploy

Every push to `main` runs `.github/workflows/deploy.yml`, which runs `npm run check` and
publishes `build/` to GitHub Pages. Pull requests run the same checks without deploying.
GitHub Pages can't send custom headers, so the CSP ships as a `<meta>` tag.

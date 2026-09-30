### gabrielrigon.github.io

My personal website, built with React.

#### Development

Requires Node 22 (see `.nvmrc`) and Yarn 1.

```sh
yarn          # install dependencies
yarn start    # dev server on http://localhost:3000
yarn build    # production build in build/
```

`yarn build` runs the Create React App build and then `scripts/prerender.js`, which renders every route listed in `src/utils/routeMeta.json` on Node and writes the full HTML for each one (`index.html`, `projects.html`). A new route has to be added to `routeMeta.json`, `public/sitemap.xml` and `public/llms.txt`.

#### Deploy

Every push to `main` runs `.github/workflows/deploy.yml`, which builds the site and publishes `build/` to GitHub Pages. Nothing generated is committed.

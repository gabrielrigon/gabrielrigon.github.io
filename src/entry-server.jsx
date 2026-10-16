import { renderToString } from 'react-dom/server'

import App from './app/App'

export { ROUTES, REDIRECTS } from './app/routes'
export { renderHead, renderRedirect } from './app/head'

export const render = pathname => renderToString(<App pathname={pathname} />)

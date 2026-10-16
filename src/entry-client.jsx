/*
 * Development entry only. Production pages are prerendered to static HTML and ship no
 * JavaScript (see scripts/prerender.js), but this import graph is what Vite bundles into the
 * single stylesheet those pages link.
 */
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

import './styles/fonts.css'
import './styles/global.css'
import App from './app/App'
import { findRoute } from './app/routes'

const { pathname } = window.location
document.title = findRoute(pathname).title

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App pathname={pathname} />
  </StrictMode>,
)

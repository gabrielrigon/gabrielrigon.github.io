import React from 'react'
import { BrowserRouter, Navigate, Routes, Route } from 'react-router-dom'

import { constants } from './utils'
import { PageWrapper, SkipLink } from './components'
import { Home, Projects } from './screens'

const { ROUTES } = constants

/* The prerender passes a StaticRouter and the route, since Node has no window */
function App({ Router = BrowserRouter, location }) {
  return (
    <PageWrapper>
      <SkipLink href="#content">Skip to content</SkipLink>
      <Router location={location}>
        <Routes>
          <Route path={ROUTES.PROJECTS} element={<Projects />} />
          <Route
            path={ROUTES.PROJECTS_LEGACY}
            element={<Navigate to={ROUTES.PROJECTS} replace />}
          />
          <Route path={ROUTES.HOME} element={<Home />} />
        </Routes>
      </Router>
    </PageWrapper>
  )
}

export default App

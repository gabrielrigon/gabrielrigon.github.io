import { PATHS } from '../config/site'
import HomePage from '../features/home/HomePage'
import NotFoundPage from '../features/not-found/NotFoundPage'
import ProjectsPage from '../features/projects/ProjectsPage'

/**
 * Single source of truth for pages: the prerender writes one HTML file per entry, and the
 * sitemap test checks public/sitemap.xml against the indexable ones.
 */
export const ROUTES = [
  {
    path: PATHS.home,
    file: 'index.html',
    title: 'Gabriel Rigon · Technology & AI Leadership',
    description:
      'CTO and Head of Technology, sixteen years in technology leadership, software architecture and AI adoption and governance, serving over 2 million people a month.',
    schemaType: 'ProfilePage',
    Page: HomePage,
  },
  {
    path: PATHS.projects,
    file: 'projects.html',
    title: 'Selected projects · Gabriel Rigon',
    description:
      'Ten projects across public health, education, infrastructure and AI, described by the role held rather than the code written.',
    schemaType: 'CollectionPage',
    breadcrumb: 'Selected projects',
    Page: ProjectsPage,
  },
  {
    path: PATHS.notFound,
    file: '404.html',
    title: 'Page not found · Gabriel Rigon',
    description: "This address doesn't exist.",
    noindex: true,
    Page: NotFoundPage,
  },
]

/* Old URLs kept alive. GitHub Pages has no server-side redirects, so the prerender writes a
   static page that forwards to the new address. */
export const REDIRECTS = [{ from: '/recent-projects', to: PATHS.projects }]

const NOT_FOUND = ROUTES.find(route => route.path === PATHS.notFound)

const normalize = pathname => (pathname.length > 1 ? pathname.replace(/\/+$/, '') : pathname)

export const findRoute = pathname =>
  ROUTES.find(route => route.path === normalize(pathname)) ?? NOT_FOUND

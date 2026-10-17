/**
 * Everything that identifies the site and changes between deploy targets lives here,
 * so components and build scripts never hard-code an origin, a locale or a policy.
 */
export const SITE = {
  origin: 'https://gabrielrigon.com.br',
  name: 'Gabriel Rigon',
  lang: 'en-US',
  ogLocale: 'en_US',
  givenName: 'Gabriel',
  familyName: 'Rigon',
  /* Stable URL (public/, no hash) so search engines can keep one photo for the person. */
  photo: { path: '/gabriel.jpg', width: 600, height: 800 },
  ogImage: {
    path: '/og-image.png',
    width: 1200,
    height: 630,
    alt: 'Gabriel Rigon, CTO and Head of Technology',
  },
  /* GitHub Pages can't send custom headers, so the CSP ships as a <meta> in every page. */
  cspMeta: true,
}

export const PATHS = {
  home: '/',
  projects: '/projects',
  notFound: '/404',
}

export const absoluteUrl = path => new URL(path, SITE.origin).href

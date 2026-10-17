import { SITE, absoluteUrl } from './site'

const PERSON_ID = `${SITE.origin}/#person`
const WEBSITE_ID = `${SITE.origin}/#website`
const COMPANY_ID = 'https://gbrlrg.com.br/#organization'
const SCHOOL_ID = 'https://mindminer.com.br/#organizacao'

const app = ({ id, name, url, category, os }) => ({
  '@type': 'SoftwareApplication',
  '@id': id,
  name,
  url,
  applicationCategory: category,
  ...(os && { operatingSystem: os }),
  publisher: { '@id': COMPANY_ID },
})

/* The entities every page describes. The same @id values are used on gbrlrg.com.br and on
   each app's site; keep them in sync. */
const ENTITIES = [
  {
    '@type': 'Person',
    '@id': PERSON_ID,
    name: SITE.name,
    givenName: SITE.givenName,
    familyName: SITE.familyName,
    url: absoluteUrl('/'),
    email: 'mailto:gabrielrigon@outlook.com',
    jobTitle: 'Head of Technology',
    description:
      'CTO and Head of Technology, sixteen years in technology leadership, software architecture, cloud infrastructure and AI adoption and governance.',
    worksFor: {
      '@type': 'Organization',
      name: 'Appolus Tecnologia',
      url: 'https://www.linkedin.com/company/appolustecnologia',
    },
    address: { '@type': 'PostalAddress', addressCountry: 'BR' },
    knowsAbout: [
      'Technology leadership',
      'Software architecture',
      'AI adoption',
      'AI governance',
      'Cloud infrastructure',
      'DevOps',
      'Public health technology',
      'Public education technology',
    ],
    image: {
      '@type': 'ImageObject',
      url: absoluteUrl(SITE.photo.path),
      width: SITE.photo.width,
      height: SITE.photo.height,
    },
    sameAs: ['https://linkedin.com/in/gabrielrigon', 'https://github.com/gabrielrigon'],
  },
  {
    '@type': 'Organization',
    '@id': COMPANY_ID,
    name: 'GBRLRG',
    legalName: 'GABRIEL RIGON TECNOLOGIA LTDA',
    url: 'https://gbrlrg.com.br/',
    logo: 'https://gbrlrg.com.br/logo.png',
    founder: { '@id': PERSON_ID },
    owns: [
      { '@id': 'https://myplanbuddy.app/#app' },
      { '@id': 'https://tablewit.app/#app' },
      { '@id': 'https://jambu.me/#app' },
    ],
    subOrganization: { '@id': SCHOOL_ID },
  },
  app({
    id: 'https://myplanbuddy.app/#app',
    name: 'My Plan Buddy',
    url: 'https://myplanbuddy.app/',
    category: 'ProductivityApplication',
    os: 'iOS, iPadOS, watchOS',
  }),
  app({
    id: 'https://tablewit.app/#app',
    name: 'Tablewit',
    url: 'https://tablewit.app/',
    category: 'GameApplication',
    os: 'iOS, iPadOS, watchOS',
  }),
  app({
    id: 'https://jambu.me/#app',
    name: 'Jambu',
    url: 'https://jambu.me/',
    category: 'FinanceApplication',
  }),
  {
    '@type': 'EducationalOrganization',
    '@id': SCHOOL_ID,
    name: 'Mindminer',
    url: 'https://mindminer.com.br/',
    description: 'Cursos de IA e Claude Code em português',
    parentOrganization: { '@id': COMPANY_ID },
    founder: { '@id': PERSON_ID },
  },
  {
    '@type': 'WebSite',
    '@id': WEBSITE_ID,
    url: absoluteUrl('/'),
    name: SITE.name,
    inLanguage: SITE.lang,
    about: { '@id': PERSON_ID },
    publisher: { '@id': PERSON_ID },
  },
]

const breadcrumb = route => ({
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: SITE.name, item: absoluteUrl('/') },
    { '@type': 'ListItem', position: 2, name: route.breadcrumb, item: absoluteUrl(route.path) },
  ],
})

/**
 * The page itself as a node of the graph: ProfilePage on the home page (Google's markup for a
 * page about one person), CollectionPage with a breadcrumb on the projects page.
 */
const pageNode = route => {
  const url = absoluteUrl(route.path)
  return {
    '@type': route.schemaType,
    '@id': `${url}#webpage`,
    url,
    name: route.title,
    description: route.description,
    inLanguage: SITE.lang,
    isPartOf: { '@id': WEBSITE_ID },
    ...(route.schemaType === 'ProfilePage'
      ? { mainEntity: { '@id': PERSON_ID } }
      : { about: { '@id': PERSON_ID } }),
    ...(route.breadcrumb && { breadcrumb: breadcrumb(route) }),
  }
}

export const structuredData = route => ({
  '@context': 'https://schema.org',
  '@graph': [...(route.schemaType ? [pageNode(route)] : []), ...ENTITIES],
})

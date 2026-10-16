import { SITE, absoluteUrl } from './site'

const PERSON_ID = `${SITE.origin}/#person`
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

/* The same @id values are used on gbrlrg.com.br and on each app's site; keep them in sync. */
export const STRUCTURED_DATA = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'Person',
      '@id': PERSON_ID,
      name: SITE.name,
      url: absoluteUrl('/'),
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
      image: absoluteUrl(SITE.ogImage.path),
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
      '@id': `${SITE.origin}/#website`,
      url: absoluteUrl('/'),
      name: SITE.name,
      inLanguage: SITE.lang,
      about: { '@id': PERSON_ID },
      publisher: { '@id': PERSON_ID },
    },
  ],
}

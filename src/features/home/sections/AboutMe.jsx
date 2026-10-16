import { Fragment } from 'react'

import portrait300 from '../../../assets/img/gabriel-300.webp'
import portrait600 from '../../../assets/img/gabriel-600.webp'
import portraitFallback from '../../../assets/img/gabriel-600.jpg'
import { EMPLOYER, VENTURES } from '../../../content/profile'
import { listSeparator } from '../../../lib/format'
import { Section, Text, TextLink } from '../../../ui'
import styles from './AboutMe.module.css'

const { studio, apps, school } = VENTURES

export default function AboutMe() {
  return (
    <Section title="Track record">
      <picture>
        <source
          type="image/webp"
          srcSet={`${portrait300} 300w, ${portrait600} 600w`}
          sizes="(min-width: 48rem) 150px, 132px"
        />
        <img
          className={styles.portrait}
          src={portraitFallback}
          alt="Portrait of Gabriel Rigon"
          width="600"
          height="800"
          loading="lazy"
          decoding="async"
        />
      </picture>
      <Text>
        Intern in 2010, then junior developer, tech lead, and for the last eight years software
        architect. Today I&apos;m Head of Technology at{' '}
        <TextLink href={EMPLOYER.url} external>
          {EMPLOYER.name}
        </TextLink>
        .
      </Text>
      <Text>
        That path made me a full-range engineer, from HTML and CSS to embedded software, with a lot
        of flight hours in infrastructure between the two. I&apos;ve built institutional websites, a
        childcare app in Europe, SAP integrations, APIs for Brazil&apos;s national health data
        network, high-performance search over large medical bases, and systems with 1,200+ tables
        and 35,000 people logged in daily.
      </Text>
      <Text>
        I&apos;ve always worked inside the problem, not next to it, through audits, outages,
        migrations and public deadlines that don&apos;t move. I&apos;m still here because building
        something a couple of million people actually use never stopped being a good reason to get
        up.
      </Text>
      <Text>
        On my own time I run{' '}
        <TextLink href={studio.url} external>
          {studio.name}
        </TextLink>
        , a small studio where I make{' '}
        {apps.map((app, index) => (
          <Fragment key={app.url}>
            <TextLink href={app.url} external>
              {app.name}
            </TextLink>
            {listSeparator(index, apps.length)}
          </Fragment>
        ))}
        , plus{' '}
        <TextLink href={school.url} external>
          {school.name}
        </TextLink>
        , where I teach AI in Portuguese.
      </Text>
      <Text>Away from all that, I&apos;m into good food, the beach, trekking, travel and sun.</Text>
    </Section>
  )
}

import React from 'react'
import styled from 'styled-components'

import { CustomLink, Section, Text, Title } from '../../../components'
import { colors, media, radius } from '../../../utils/theme'
import portrait from '../../../assets/img/gabriel.jpg'

/* floated so the copy wraps around it and closes the gap underneath */
const Portrait = styled.img`
  display: block;
  width: 132px;
  height: auto;

  border: 1px solid ${colors.line};
  border-radius: ${radius};
  margin: 0 0 1.25rem;

  filter: grayscale(1) contrast(1.04);

  ${media.md} {
    float: left;
    width: 150px;
    margin: 0.35rem 2rem 1rem 0;
    shape-outside: margin-box;
  }
`

const AboutMe = () => (
  <Section className="about-me">
    <Title>Track record</Title>
    <Portrait src={portrait} alt="Gabriel Rigon" width="720" height="960" loading="lazy" decoding="async" />
    <Text>
      Intern in 2010, then junior developer, tech lead, and for the last eight
      years software architect. Today I'm Head of Technology at{' '}
      <CustomLink
        href="https://www.linkedin.com/company/appolustecnologia"
        target="_blank"
        rel="noreferrer"
      >
        Appolus Tecnologia
      </CustomLink>
      .
    </Text>
    <Text>
      That path made me a full-range engineer, from HTML and CSS to embedded
      software, with a lot of flight hours in infrastructure between the two.
      I've built institutional websites, a childcare app in Europe, SAP
      integrations, APIs for Brazil's national health data network,
      high-performance search over large medical bases, and systems with
      1,200+ tables and 35,000 people logged in daily.
    </Text>
    <Text>
      I've always worked inside the problem, not next to it, through audits,
      outages, migrations and public deadlines that don't move. I'm still here
      because building something a couple of million people actually use never
      stopped being a good reason to get up.
    </Text>
    <Text>
      On my own time I run{' '}
      <CustomLink href="https://gbrlrg.com.br/" target="_blank" rel="noreferrer">
        GBRLRG
      </CustomLink>
      , a small studio where I make{' '}
      <CustomLink href="https://myplanbuddy.app/" target="_blank" rel="noreferrer">
        My Plan Buddy
      </CustomLink>
      ,{' '}
      <CustomLink href="https://tablewit.app/" target="_blank" rel="noreferrer">
        Tablewit
      </CustomLink>{' '}
      and{' '}
      <CustomLink href="https://jambu.me/" target="_blank" rel="noreferrer">
        Jambu
      </CustomLink>
      , plus{' '}
      <CustomLink href="https://mindminer.com.br/" target="_blank" rel="noreferrer">
        Mindminer
      </CustomLink>
      , where I teach AI in Portuguese.
    </Text>
    <Text>Away from all that, I'm into good food, the beach, trekking, travel and sun.</Text>
  </Section>
)

export default AboutMe

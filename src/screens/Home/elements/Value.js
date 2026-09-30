import React from 'react'
import styled from 'styled-components'

import { Section, Text, Title } from '../../../components'
import { colors, fonts, media } from '../../../utils/theme'

const List = styled.div`
  margin-top: 1.5rem;
  border-top: 1px solid ${colors.line};
`

const Item = styled.div`
  padding: 1.25rem 0;
  border-bottom: 1px solid ${colors.line};

  ${media.md} {
    display: grid;
    grid-template-columns: 12rem minmax(0, 1fr);
    gap: 0 2rem;
  }
`

const Name = styled.h3`
  margin: 0 0 0.45rem;

  font-family: ${fonts.display};
  font-size: 1rem;
  font-weight: 600;
  letter-spacing: -0.02em;
  color: ${colors.ink};

  ${media.md} {
    margin: 0;
    font-size: 0.96rem;
  }
`

const Body = styled.p`
  font-family: ${fonts.body};
  font-size: 0.95rem;
  line-height: 1.7;
  letter-spacing: -0.006em;
  color: ${colors.ink};
  margin: 0;
`

const AREAS = [
  {
    name: 'Owning the technology function',
    body: `Architecture, delivery, infrastructure and the calls that carry real
      risk, held end to end. I've seen which decisions compound and which ones
      quietly cost you a year.`,
  },
  {
    name: 'AI where the stakes are real',
    body: `This means production, not pilots, and the hard part is getting a
      team to trust it, use it the same way twice, and stay inside the lines
      when nobody's watching.`,
  },
  {
    name: 'Leading engineering at any scale',
    body: `From a single squad to a whole technology organization, municipal
      to international, the standards a team refuses to drop are what scale
      with it.`,
  },
]

const Value = () => (
  <Section className="value">
    <Title>Where I add the most value</Title>
    <Text>
      Three problem shapes that keep coming back, whatever the industry.
    </Text>
    <List>
      {AREAS.map(area => (
        <Item key={area.name}>
          <Name>{area.name}</Name>
          <Body>{area.body}</Body>
        </Item>
      ))}
    </List>
  </Section>
)

export default Value

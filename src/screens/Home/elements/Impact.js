import React from 'react'
import styled from 'styled-components'

import { Section, Text, Title } from '../../../components'
import { colors, fonts, media } from '../../../utils/theme'

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: 1.5rem 1rem;
  margin-top: 1.75rem;

  ${media.md} {
    grid-template-columns: repeat(4, minmax(0, 1fr));
    margin-top: 2.25rem;
  }
`

const Cell = styled.div``

const Number = styled.strong`
  display: block;

  font-family: ${fonts.display};
  font-size: 1.9rem;
  font-weight: 600;
  line-height: 1;
  letter-spacing: -0.035em;
  color: ${colors.accent};

  ${media.md} {
    font-size: 2.2rem;
  }
`

const Label = styled.span`
  display: block;
  margin-top: 0.6rem;

  font-family: ${fonts.mono};
  font-size: 0.72rem;
  font-weight: 500;
  line-height: 1.5;
  letter-spacing: 0.06em;
  text-transform: uppercase;
  color: ${colors.muted};
`

const NUMBERS = [
  { value: '2M+', label: 'People served monthly' },
  { value: '35k', label: 'Daily users on a single platform' },
  { value: '8 yrs', label: 'As a software architect' },
  { value: '2 to 20', label: 'People per team I lead' },
]

const Impact = () => (
  <Section className="impact">
    <Title>Impact in numbers</Title>
    <Text>
      Care and management ERPs, APIs, apps and citizen portals running the
      day-to-day of municipal and state health and education services.
    </Text>
    <Grid>
      {NUMBERS.map(item => (
        <Cell key={item.label}>
          <Number>{item.value}</Number>
          <Label>{item.label}</Label>
        </Cell>
      ))}
    </Grid>
  </Section>
)

export default Impact

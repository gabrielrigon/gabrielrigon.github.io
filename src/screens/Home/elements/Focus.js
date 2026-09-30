import React from 'react'

import { Section, Text, Title } from '../../../components'
import { SimpleList } from '../../../components/List'

const AREAS = [
  'AI adoption in critical projects',
  'AI governance & guardrails',
  'Team enablement & training',
  'Process and workflow R&D',
  'Software architecture',
  'DevOps culture',
]

const Focus = () => (
  <Section className="focus">
    <Title>What I'm working on</Title>
    <Text>
      Roughly 90% of my time goes into R&D, the part of the job I'd keep if I
      had to drop everything else: finding and rolling out what makes the
      company's teams faster, and not only the technology ones.
    </Text>
    <Text>
      Right now that means AI in critical delivery. Every gain is measured
      before I call it a gain, and so far the numbers have held up.
    </Text>
    <SimpleList items={AREAS} />
  </Section>
)

export default Focus

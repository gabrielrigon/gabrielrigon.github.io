import React from 'react'

import { constants } from '../../../utils'
import { LinkButton, Section, Text, Title } from '../../../components'
import { SimpleList } from '../../../components/List'

const { ROUTES, SKILLS } = constants

const Skills = () => (
  <Section className="skills">
    <Title>Toolbox</Title>
    <Text>
      Ordered by where I carry the most weight today, not by where I started,
      and it keeps growing from here.
    </Text>
    <SimpleList items={SKILLS} />
    <div>
      <LinkButton href={ROUTES.PROJECTS} $primary>
        Selected projects →
      </LinkButton>
    </div>
  </Section>
)

export default Skills

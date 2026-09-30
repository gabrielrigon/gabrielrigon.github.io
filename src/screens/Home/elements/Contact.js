import React from 'react'
import styled from 'styled-components'

import { LinkButton, Section, Text, Title } from '../../../components'
import { constants } from '../../../utils'

const { CONTACTS } = constants

const Buttons = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.6rem;
  margin-top: 1.4rem;
`

const Contact = () => (
  <Section className="contact">
    <Title>Let's talk</Title>
    <Text>
      Always up for a good conversation about technology leadership, advisory
      and board-level questions, AI adoption where the stakes are real, or an
      international project. If any of that is on your desk, write to me.
    </Text>
    <Buttons>
      <LinkButton href="mailto:gabrielrigon@outlook.com" $primary>
        gabrielrigon@outlook.com
      </LinkButton>
      {CONTACTS.map(item => (
        <LinkButton
          key={item.URL}
          href={item.URL}
          target="_blank"
          rel="noreferrer"
        >
          {item.DESCRIPTION}
        </LinkButton>
      ))}
    </Buttons>
  </Section>
)

export default Contact

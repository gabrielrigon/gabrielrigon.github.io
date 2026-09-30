import React from 'react'
import styled from 'styled-components'

import { Title } from '../../../components'
import { colors, fonts, media } from '../../../utils/theme'

const Wrapper = styled.section`
  margin-top: 1.5rem;
  padding-top: 2rem;
  border-top: 1px solid ${colors.line};
`

const Ul = styled.ul`
  list-style: none;
  margin: 0;
  padding: 0;
`

const Li = styled.li`
  padding: 1rem 0;
  border-bottom: 1px solid ${colors.line};

  ${media.md} {
    display: grid;
    grid-template-columns: minmax(0, 1fr) auto;
    align-items: baseline;
    gap: 0.35rem 2rem;
  }
`

const Name = styled.span`
  font-family: ${fonts.body};
  font-size: 0.95rem;
  font-weight: 500;
  color: ${colors.ink};
`

const Note = styled.p`
  font-family: ${fonts.body};
  font-size: 0.9rem;
  line-height: 1.6;
  color: ${colors.muted};
  max-width: 62ch;
  margin: 0.3rem 0 0;

  ${media.md} {
    grid-column: 1;
    margin: 0;
  }
`

const Stack = styled.span`
  font-family: ${fonts.mono};
  font-size: 0.72rem;
  letter-spacing: 0.06em;
  text-transform: uppercase;
  color: ${colors.muted};

  ${media.md} {
    max-width: 22rem;
    grid-row: 1;
    grid-column: 2;
    text-align: right;
  }
`

const EarlierWork = ({ items = [] }) => (
  <Wrapper>
    <Title>Earlier work</Title>
    <Ul>
      {items.map(item => (
        <Li key={item.PROJECT}>
          <Name>{item.PROJECT}</Name>
          <Stack>{item.TECHNOLOGIES}</Stack>
          {item.NOTE && <Note>{item.NOTE}</Note>}
        </Li>
      ))}
    </Ul>
  </Wrapper>
)

export default EarlierWork

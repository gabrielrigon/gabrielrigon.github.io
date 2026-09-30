import React from 'react'
import styled from 'styled-components'

import { colors, fonts, media } from '../../utils/theme'
import SimpleListItem from './SimpleListItem'

const Group = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.55rem;
  padding: 1rem 0;
  border-top: 1px solid ${colors.line};

  ${media.md} {
    flex-direction: row;
    align-items: baseline;
    gap: 1.5rem;
  }

  &:last-child {
    border-bottom: 1px solid ${colors.line};
  }
`

const GroupName = styled.span`
  font-family: ${fonts.mono};
  font-size: 0.72rem;
  font-weight: 500;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  color: ${colors.muted};

  ${media.md} {
    flex: none;
    width: 9.5rem;
  }
`

const Ul = styled.ul`
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;

  list-style: none;
  margin: 0;
  padding: 0;
`

const Wrapper = styled.div`
  margin: 0.75rem 0 1.5rem;
`

/* Accepts either a flat array of strings or [{ GROUP, ITEMS }] */
const SimpleList = ({ items = [] }) => {
  const groups = items.length && typeof items[0] === 'string'
    ? [{ GROUP: null, ITEMS: items }]
    : items

  return (
    <Wrapper>
      {groups.map(group => (
        <Group key={group.GROUP || 'all'}>
          {group.GROUP && <GroupName>{group.GROUP}</GroupName>}
          <Ul>
            {group.ITEMS.map(item => (
              <SimpleListItem key={item}>{item}</SimpleListItem>
            ))}
          </Ul>
        </Group>
      ))}
    </Wrapper>
  )
}

export default SimpleList

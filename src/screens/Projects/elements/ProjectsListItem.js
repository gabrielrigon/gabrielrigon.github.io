import React from 'react'
import styled from 'styled-components'

import { Tag } from '../../../components'
import { colors, fonts, media, radius } from '../../../utils/theme'

const Li = styled.li`
  display: grid;
  grid-template-columns: 1fr;
  gap: 0.75rem;

  padding: 1.5rem 0;
  border-bottom: 1px solid ${colors.line};

  ${media.md} {
    grid-template-columns: 3.5rem 1fr;
    gap: 0 1.5rem;
    padding: 1.75rem 0;
  }
`

const Number = styled.span`
  font-family: ${fonts.mono};
  font-size: 0.72rem;
  font-weight: 500;
  letter-spacing: 0.1em;
  color: ${colors.accent};

  ${media.md} {
    grid-row: span 3;
    padding-top: 0.35rem;
  }
`

const Heading = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: baseline;
  gap: 0.5rem 0.7rem;
`

const Badge = styled.span`
  font-family: ${fonts.mono};
  font-size: 0.68rem;
  font-weight: 500;
  letter-spacing: 0.12em;
  text-transform: uppercase;
  white-space: nowrap;

  color: ${colors.accent};
  border: 1px solid ${colors.accent};
  border-radius: ${radius};
  padding: 0.2rem 0.45rem;
`

const Project = styled.h3`
  font-family: ${fonts.display};
  font-size: 1.1rem;
  font-weight: 600;
  line-height: 1.3;
  letter-spacing: -0.025em;
  color: ${colors.ink};
  margin: 0;

  ${media.md} {
    font-size: 1.3rem;
  }
`

const Description = styled.p`
  font-family: ${fonts.body};
  font-size: 0.95rem;
  line-height: 1.7;
  letter-spacing: -0.006em;
  color: ${colors.muted};
  max-width: 72ch;
  margin: 0.65rem 0 0;
`

const Technologies = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.4rem;
  margin-top: 1.25rem;
`

const ProjectsListItem = ({ item, index }) => {
  const { PROJECT, DESCRIPTION, TECHNOLOGIES, STATUS } = item || {}

  // splits "A, B (X, Y) and C" into tags without breaking parentheses apart
  const technologies = String(TECHNOLOGIES || '')
    .split(/(?:,|\sand\s)(?![^(]*\))/)
    .map(tech => tech.trim())
    .filter(Boolean)

  return (
    <Li>
      <Number>{String(index + 1).padStart(2, '0')}</Number>
      <div>
        <Heading>
          <Project>{PROJECT}</Project>
          {STATUS && <Badge>{STATUS}</Badge>}
        </Heading>
        <Description>{DESCRIPTION}</Description>
        <Technologies>
          {technologies.map(tech => (
            <Tag key={tech}>{tech}</Tag>
          ))}
        </Technologies>
      </div>
    </Li>
  )
}

export default ProjectsListItem

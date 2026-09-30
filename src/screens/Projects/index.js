import React from 'react'
import styled from 'styled-components'

import { constants } from '../../utils'
import useDocumentMeta from '../../utils/useDocumentMeta'
import routeMeta from '../../utils/routeMeta.json'
import { colors, fonts } from '../../utils/theme'
import { LinkButton, PageTitle, Text } from '../../components'
import { EarlierWork, ProjectsList } from './elements'

const { ROUTES, PROJECTS, EARLIER_WORK } = constants

const Header = styled.header`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 1.5rem;
  padding-bottom: 1.5rem;
  margin-bottom: 0.5rem;
  border-bottom: 1px solid ${colors.line};
`

const Count = styled.p`
  margin: 0;

  font-family: ${fonts.mono};
  font-size: 0.72rem;
  font-weight: 500;
  letter-spacing: 0.14em;
  text-transform: uppercase;
  color: ${colors.muted};
`

const Projects = () => {
  useDocumentMeta({ ...routeMeta['/projects'], path: '/projects' })

  return (
    <>
      <Header>
        <LinkButton href={ROUTES.HOME}>← Back</LinkButton>
        <PageTitle>Selected projects</PageTitle>
        <Text>
          Described by the role I held rather than the code I wrote. Some I led
          teams through, some I built myself, roughly newest first.
        </Text>
        <Count>{PROJECTS.length} selected works</Count>
      </Header>

      <ProjectsList items={PROJECTS} />
      <EarlierWork items={EARLIER_WORK} />
    </>
  )
}

export default Projects

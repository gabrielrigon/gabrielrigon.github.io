import React from 'react'
import styled from 'styled-components'

import ProjectsListItem from './ProjectsListItem'

const Ul = styled.ul`
  list-style: none;
  margin: 0;
  padding: 0;
`

const ProjectsList = ({ items }) => (
  <Ul>
    {items.map((item, index) => (
      <ProjectsListItem key={item.PROJECT} item={item} index={index} />
    ))}
  </Ul>
)

export default ProjectsList

import React from 'react'

import useDocumentMeta from '../../utils/useDocumentMeta'
import routeMeta from '../../utils/routeMeta.json'

import {
  AboutMe,
  Approach,
  Contact,
  Focus,
  Hero,
  Impact,
  Value,
  Skills,
} from './elements'

const Home = () => {
  useDocumentMeta({ ...routeMeta['/'], path: '/' })

  return (
    <>
      <Hero />
      <Value />
      <Impact />
      <AboutMe />
      <Focus />
      <Approach />
      <Skills />
      <Contact />
    </>
  )
}

export default Home

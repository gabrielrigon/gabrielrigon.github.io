import AboutMe from './sections/AboutMe'
import Approach from './sections/Approach'
import Contact from './sections/Contact'
import Focus from './sections/Focus'
import Hero from './sections/Hero'
import Impact from './sections/Impact'
import Skills from './sections/Skills'
import Value from './sections/Value'

export default function HomePage() {
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

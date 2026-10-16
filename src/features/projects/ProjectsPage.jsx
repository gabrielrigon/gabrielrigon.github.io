import { PATHS } from '../../config/site'
import { EARLIER_WORK, PROJECTS } from '../../content/projects'
import { ButtonLink, PageTitle, Text } from '../../ui'
import EarlierWork from './components/EarlierWork'
import ProjectList from './components/ProjectList'
import styles from './ProjectsPage.module.css'

export default function ProjectsPage() {
  return (
    <>
      <header className={styles.header}>
        <ButtonLink href={PATHS.home}>
          <span aria-hidden="true">←</span> Back
        </ButtonLink>
        <PageTitle>Selected projects</PageTitle>
        <Text>
          Described by the role I held rather than the code I wrote. Some I led teams through, some
          I built myself, roughly newest first.
        </Text>
        <p className={styles.count}>{PROJECTS.length} selected works</p>
      </header>

      <ProjectList projects={PROJECTS} />
      <EarlierWork items={EARLIER_WORK} />
    </>
  )
}

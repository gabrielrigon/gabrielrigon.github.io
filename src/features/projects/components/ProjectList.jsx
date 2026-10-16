import ProjectItem from './ProjectItem'
import styles from './ProjectList.module.css'

export default function ProjectList({ projects }) {
  return (
    <ol className={styles.list}>
      {projects.map((project, index) => (
        <ProjectItem key={project.name} project={project} index={index} />
      ))}
    </ol>
  )
}

import { padIndex } from '../../../lib/format'
import { Tag } from '../../../ui'
import styles from './ProjectItem.module.css'

export default function ProjectItem({ project, index }) {
  const { name, description, technologies, status } = project

  return (
    <li className={styles.item}>
      <span className={styles.number} aria-hidden="true">
        {padIndex(index)}
      </span>
      <article>
        <div className={styles.heading}>
          <h2 className={styles.name}>{name}</h2>
          {status && <span className={styles.status}>{status}</span>}
        </div>
        <p className={styles.description}>{description}</p>
        <ul className={styles.technologies} aria-label="Technologies">
          {technologies.map(technology => (
            <Tag key={technology} as="li">
              {technology}
            </Tag>
          ))}
        </ul>
      </article>
    </li>
  )
}

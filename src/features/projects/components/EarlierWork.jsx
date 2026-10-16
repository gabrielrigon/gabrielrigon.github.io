import { useId } from 'react'

import { formatList } from '../../../lib/format'
import { SectionTitle } from '../../../ui'
import styles from './EarlierWork.module.css'

export default function EarlierWork({ items }) {
  const titleId = useId()

  return (
    <section className={styles.section} aria-labelledby={titleId}>
      <SectionTitle id={titleId}>Earlier work</SectionTitle>
      <ul className={styles.list}>
        {items.map(({ name, note, technologies }) => (
          <li key={name} className={styles.item}>
            <h3 className={styles.name}>{name}</h3>
            <p className={styles.stack}>{formatList(technologies)}</p>
            {note && <p className={styles.note}>{note}</p>}
          </li>
        ))}
      </ul>
    </section>
  )
}

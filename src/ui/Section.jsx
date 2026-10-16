import { useId } from 'react'

import SectionTitle from './SectionTitle'
import styles from './Section.module.css'

/** A titled region: the heading names the landmark for assistive technology. */
export default function Section({ title, children }) {
  const titleId = useId()

  return (
    <section className={styles.section} aria-labelledby={titleId}>
      <SectionTitle id={titleId}>{title}</SectionTitle>
      {children}
    </section>
  )
}

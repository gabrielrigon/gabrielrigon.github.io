import styles from './SectionTitle.module.css'

/** Section label: mono, small, quiet. Hierarchy comes from the rule below it. */
export default function SectionTitle({ id, children }) {
  return (
    <h2 id={id} className={styles.title}>
      {children}
    </h2>
  )
}

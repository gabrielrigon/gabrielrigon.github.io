import styles from './TagGroups.module.css'

/** Rows of chips, each optionally labelled: [{ name?, items: string[] }]. */
export default function TagGroups({ groups }) {
  return (
    <div className={styles.wrapper}>
      {groups.map(({ name, items }) => (
        <div key={name ?? 'all'} className={styles.group}>
          {name && <span className={styles.name}>{name}</span>}
          <ul className={styles.list} aria-label={name}>
            {items.map(item => (
              <li key={item} className={styles.item}>
                {item}
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  )
}

import styles from './PageShell.module.css'

const CONTENT_ID = 'content'

export default function PageShell({ children }) {
  return (
    <>
      <a className={styles.skipLink} href={`#${CONTENT_ID}`}>
        Skip to content
      </a>
      <main id={CONTENT_ID} className={styles.main} tabIndex={-1}>
        {children}
      </main>
    </>
  )
}

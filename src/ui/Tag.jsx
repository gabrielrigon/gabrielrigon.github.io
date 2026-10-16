import styles from './Tag.module.css'

export default function Tag({ as: Element = 'span', children }) {
  return <Element className={styles.tag}>{children}</Element>
}

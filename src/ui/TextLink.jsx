import { linkProps } from './link'
import styles from './TextLink.module.css'

export default function TextLink({ href, external = false, children }) {
  return (
    <a className={styles.link} href={href} {...linkProps({ external })}>
      {children}
    </a>
  )
}

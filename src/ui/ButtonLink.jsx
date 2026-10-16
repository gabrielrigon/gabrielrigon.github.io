import { linkProps } from './link'
import styles from './ButtonLink.module.css'

export default function ButtonLink({ href, variant = 'secondary', external = false, children }) {
  return (
    <a className={`${styles.button} ${styles[variant]}`} href={href} {...linkProps({ external })}>
      {children}
    </a>
  )
}

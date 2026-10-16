import { VALUE_AREAS } from '../../../content/home'
import { Section, Text } from '../../../ui'
import styles from './Value.module.css'

export default function Value() {
  return (
    <Section title="Where I add the most value">
      <Text>Three problem shapes that keep coming back, whatever the industry.</Text>
      <dl className={styles.list}>
        {VALUE_AREAS.map(({ name, body }) => (
          <div key={name} className={styles.item}>
            <dt className={styles.name}>{name}</dt>
            <dd className={styles.body}>{body}</dd>
          </div>
        ))}
      </dl>
    </Section>
  )
}

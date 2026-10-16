import { IMPACT_NUMBERS } from '../../../content/home'
import { Section, Text } from '../../../ui'
import styles from './Impact.module.css'

export default function Impact() {
  return (
    <Section title="Impact in numbers">
      <Text>
        Care and management ERPs, APIs, apps and citizen portals running the day-to-day of municipal
        and state health and education services.
      </Text>
      <ul className={styles.grid}>
        {IMPACT_NUMBERS.map(({ value, label }) => (
          <li key={label}>
            <strong className={styles.value}>{value}</strong>
            <span className={styles.label}>{label}</span>
          </li>
        ))}
      </ul>
    </Section>
  )
}

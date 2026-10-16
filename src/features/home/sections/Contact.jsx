import { EMAIL, SOCIAL_LINKS } from '../../../content/profile'
import { ButtonLink, Section, Text } from '../../../ui'
import styles from './Contact.module.css'

export default function Contact() {
  return (
    <Section title="Let's talk">
      <Text>
        Always up for a good conversation about technology leadership, advisory and board-level
        questions, AI adoption where the stakes are real, or an international project. If any of
        that is on your desk, write to me.
      </Text>
      <div className={styles.buttons}>
        <ButtonLink href={`mailto:${EMAIL}`} variant="primary">
          {EMAIL}
        </ButtonLink>
        {SOCIAL_LINKS.map(({ label, url }) => (
          <ButtonLink key={url} href={url} external>
            {label}
          </ButtonLink>
        ))}
      </div>
    </Section>
  )
}

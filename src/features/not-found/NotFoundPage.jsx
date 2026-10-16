import { PATHS } from '../../config/site'
import { PageTitle, Text, TextLink } from '../../ui'
import styles from './NotFoundPage.module.css'

export default function NotFoundPage() {
  return (
    <header className={styles.header}>
      <p className={styles.code}>404</p>
      <PageTitle>Page not found</PageTitle>
      <Text>
        This address doesn&apos;t exist. Try the <TextLink href={PATHS.home}>home page</TextLink> or
        the <TextLink href={PATHS.projects}>selected projects</TextLink>.
      </Text>
    </header>
  )
}

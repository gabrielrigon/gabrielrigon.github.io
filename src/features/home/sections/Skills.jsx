import { PATHS } from '../../../config/site'
import { SKILL_GROUPS } from '../../../content/home'
import { ButtonLink, Section, TagGroups, Text } from '../../../ui'

export default function Skills() {
  return (
    <Section title="Toolbox">
      <Text>
        Ordered by where I carry the most weight today, not by where I started, and it keeps growing
        from here.
      </Text>
      <TagGroups groups={SKILL_GROUPS} />
      <div>
        <ButtonLink href={PATHS.projects} variant="primary">
          Selected projects <span aria-hidden="true">→</span>
        </ButtonLink>
      </div>
    </Section>
  )
}

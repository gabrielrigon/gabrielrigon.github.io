import { FOCUS_AREAS } from '../../../content/home'
import { Section, TagGroups, Text } from '../../../ui'

export default function Focus() {
  return (
    <Section title="What I'm working on">
      <Text>
        Roughly 90% of my time goes into R&amp;D, the part of the job I&apos;d keep if I had to drop
        everything else: finding and rolling out what makes the company&apos;s teams faster, and not
        only the technology ones.
      </Text>
      <Text>
        Right now that means AI in critical delivery. Every gain is measured before I call it a
        gain, and so far the numbers have held up.
      </Text>
      <TagGroups groups={[{ items: FOCUS_AREAS }]} />
    </Section>
  )
}

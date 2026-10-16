import { PageShell } from '../ui'
import { findRoute } from './routes'

export default function App({ pathname }) {
  const { Page } = findRoute(pathname)

  return (
    <PageShell>
      <Page />
    </PageShell>
  )
}

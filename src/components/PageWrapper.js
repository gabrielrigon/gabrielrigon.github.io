import styled from 'styled-components'

import { media } from '../utils/theme'

export default styled.main.attrs({ id: 'content' })`
  max-width: 960px;
  margin: 0 auto;
  padding: 2rem 1.25rem 5rem;

  position: relative;

  display: flex;
  flex-direction: column;
  gap: 3rem;

  ${media.md} {
    padding: 4.5rem 2rem 7rem;
    gap: 4rem;
  }
`

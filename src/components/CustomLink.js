import styled from 'styled-components'

import { colors } from '../utils/theme'

export default styled.a`
  color: ${colors.ink};
  font-weight: 500;
  text-decoration: underline;
  text-decoration-color: ${colors.accent};
  text-decoration-thickness: 1px;
  text-underline-offset: 0.22em;
`

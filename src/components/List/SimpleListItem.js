import styled from 'styled-components'

import { colors, fonts, radius } from '../../utils/theme'

export default styled.li`
  display: inline-flex;
  align-items: center;

  font-family: ${fonts.mono};
  font-size: 0.72rem;
  font-weight: 500;
  letter-spacing: 0.06em;
  text-transform: uppercase;

  color: ${colors.ink};
  background: transparent;
  border: 1px solid ${colors.line};
  border-radius: ${radius};
  padding: 0.4rem 0.7rem;
`

import styled from 'styled-components'

import { colors, fonts, radius } from '../utils/theme'

export default styled.span`
  display: inline-flex;
  align-items: center;

  font-family: ${fonts.mono};
  font-size: 0.7rem;
  font-weight: 500;
  letter-spacing: 0.08em;
  text-transform: uppercase;

  background: ${({ $solid }) => ($solid ? colors.accent : 'transparent')};
  color: ${({ $solid }) => ($solid ? colors.paper : colors.muted)};
  border: 1px solid ${({ $solid }) => ($solid ? colors.accent : colors.line)};
  border-radius: ${radius};
  padding: 0.35rem 0.6rem;
`

import styled from 'styled-components'

import { colors, fonts, radius } from '../utils/theme'

export default styled.a`
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;

  font-family: ${fonts.body};
  font-size: 0.9rem;
  font-weight: 500;
  letter-spacing: -0.005em;
  text-decoration: none;

  background: ${({ $primary }) => ($primary ? colors.accent : 'transparent')};
  color: ${({ $primary }) => ($primary ? colors.paper : colors.ink)};
  border: 1px solid ${({ $primary }) => ($primary ? colors.accent : colors.control)};
  border-radius: ${radius};
  padding: 0.65rem 1.05rem;
`

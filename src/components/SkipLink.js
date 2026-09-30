import styled from 'styled-components'

import { colors, fonts, radius } from '../utils/theme'

/* Visible only on keyboard focus, so screen reader and keyboard users can
   jump past the header straight into the content. */
export default styled.a`
  position: absolute;
  left: -9999px;
  top: 0;
  z-index: 10;

  font-family: ${fonts.mono};
  font-size: 0.75rem;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  text-decoration: none;

  background: ${colors.accent};
  color: ${colors.paper};
  border-radius: ${radius};
  padding: 0.6rem 1rem;

  &:focus {
    left: 1rem;
    top: 1rem;
  }
`

import styled from 'styled-components'

import { colors, fonts, media } from '../utils/theme'

export default styled.p`
  font-family: ${fonts.body};
  font-size: 0.97rem;
  line-height: 1.7;
  letter-spacing: -0.006em;
  color: ${colors.ink};
  max-width: 75ch;
  margin: 0 0 1rem;

  ${media.md} {
    font-size: 1rem;
  }

  strong {
    font-weight: 600;
  }

  &:last-child {
    margin-bottom: 0;
  }
`

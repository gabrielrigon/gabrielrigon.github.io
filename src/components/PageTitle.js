import styled from 'styled-components'

import { colors, fonts, media } from '../utils/theme'

export default styled.h1`
  margin: 0;

  font-family: ${fonts.display};
  font-size: 2.6rem;
  font-weight: 600;
  line-height: 1;
  letter-spacing: -0.035em;
  color: ${colors.ink};

  ${media.md} {
    font-size: 3.6rem;
  }
`

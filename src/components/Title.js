import styled from 'styled-components'

import { colors, fonts } from '../utils/theme'

/* Section label: mono, small, quiet. Hierarchy comes from the rule below it */
export default styled.h2`
  display: flex;
  align-items: center;
  gap: 0.6rem;
  margin: 0 0 1.5rem;
  padding-bottom: 0.9rem;
  border-bottom: 1px solid ${colors.line};

  font-family: ${fonts.mono};
  font-size: 0.72rem;
  font-weight: 500;
  letter-spacing: 0.16em;
  text-transform: uppercase;
  color: ${colors.muted};

  &::before {
    content: '';
    width: 7px;
    height: 7px;
    margin-top: 0.35em;
    flex: none;
    background: ${({ $accent = colors.accent }) => $accent};
  }
`

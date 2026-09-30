import React from 'react'
import styled from 'styled-components'

import { colors, fonts, media } from '../../../utils/theme'

const Wrapper = styled.header`
  display: flex;
  flex-direction: column;
  gap: 2.25rem;

  ${media.md} {
    gap: 3rem;
  }
`

const Block = styled.div`
  padding-top: 0.5rem;

  ${media.md} {
    display: grid;
    grid-template-columns: minmax(0, 1fr) minmax(0, 1fr);
    align-items: start;
    gap: 0 3rem;
    padding-top: 2rem;
  }
`

const Left = styled.div``

const Right = styled.div`
  ${media.md} {
    padding-top: 0.35rem;
  }
`

const Kicker = styled.p`
  display: flex;
  align-items: center;
  gap: 0.7rem;
  margin: 0 0 1.5rem;

  font-family: ${fonts.mono};
  font-size: 0.72rem;
  font-weight: 500;
  letter-spacing: 0.18em;
  text-transform: uppercase;
  color: ${colors.muted};

  &::before {
    content: '';
    width: 28px;
    height: 1px;
    background: ${colors.accent};
  }
`

const Name = styled.h1`
  font-family: ${fonts.display};
  font-size: 3.1rem;
  font-weight: 600;
  line-height: 0.95;
  letter-spacing: -0.045em;
  color: ${colors.ink};
  margin: 0;

  ${media.md} {
    font-size: 5rem;
  }
`

const Lead = styled.p`
  font-family: ${fonts.display};
  font-size: 1.15rem;
  font-weight: 400;
  line-height: 1.45;
  letter-spacing: -0.015em;
  color: ${colors.ink};
  max-width: 30ch;
  margin: 1.75rem 0 0;

  ${media.md} {
    font-size: 1.5rem;
    max-width: 26ch;
    margin-top: 0;
  }
`

const Sub = styled.p`
  font-family: ${fonts.body};
  font-size: 0.97rem;
  line-height: 1.7;
  color: ${colors.muted};
  max-width: 52ch;
  margin: 1.1rem 0 0;
`

const Hero = () => (
  <Wrapper className="hero">
    <Block>
      <Left>
        <Kicker>CTO · Technology &amp; AI Leadership</Kicker>
        <Name>
          Gabriel{' '}
          <br />
          Rigon
        </Name>
      </Left>
      <Right>
        <Lead>
          Technology and AI leadership for work that can't afford to go wrong
        </Lead>
        <Sub>
          Head of Technology at a small company with an outsized footprint,
          16 years into a career built in Brazil and on international
          projects. The platforms I run serve over 2 million people a month
          across public health and education, where a bad call costs more
          than a rollback.
        </Sub>
      </Right>
    </Block>
  </Wrapper>
)

export default Hero

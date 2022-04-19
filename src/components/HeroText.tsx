import React, { FC } from "react";
import styled from "styled-components";
import Typist from "react-typist";

import media from "../utils/style";

const StyledTypist = styled(Typist)`
  color: #fff;
  letter-spacing: 17px;
  margin: 0 auto;
  font-size: 72px;
  line-height: 80px;
  font-weight: 100;
  text-transform: uppercase;
  font-family: "Raleway";
  ${media.xs`
    font-size:38px;
    line-height: 44px;
    letter-spacing: 8px;
  `}
`;

const HeroText: FC = () => (
  <StyledTypist cursor={{ show: false }}>
    <strong key={1}>Lets Make</strong>
    <br /> Amazing Apps
    <Typist.Backspace count={13} delay={1500} />
    <span key={2}> Beautiful Pages</span>
    <Typist.Backspace count={16} delay={1500} />
    <span key={2}> Meaningful Experiences</span>
    <Typist.Backspace count={33} delay={1500} />
    <strong key={8}>Most Importantly Though</strong>
    <Typist.Backspace count={25} delay={2000} />
    <Typist.Delay ms={300} />
    <span key={5}>.</span>
    <Typist.Delay ms={600} />
    <span key={6}>.</span>
    <Typist.Delay ms={900} />
    <span key={7}>.</span>
    <Typist.Backspace count={3} delay={10} />
    <br />
    <strong key={9}>Lets Connect 👋</strong>
  </StyledTypist>
);

export default HeroText;

import React from "react";
import Image from "gatsby-image";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  position: relative;
  align-items: center;
`;

const Overlay = styled.div`
  width: 80%;
  text-align: center;
  margin: 0px auto;
  position: absolute;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
`;

const BgImage = styled(Image)`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  z-index: -1;
  height: 100vh;
  & > img {
    object-fit: cover !important;
    object-position: 50% 50% !important;
    font-family: "object-fit:  cover !important;
    object-position:  50% 50% !important;";
  }
`;

interface HeroProps {
  fluid: never;
  children: boolean | React.ReactChild | React.ReactFragment | React.ReactPortal | null | undefined;
}

const Hero = (props: HeroProps): JSX.Element => (
  <Container>
    <BgImage fluid={props.fluid} />
    <Overlay>{props.children}</Overlay>
  </Container>
);

export default Hero;

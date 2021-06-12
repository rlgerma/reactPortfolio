import React, { useState, useEffect, useRef } from "react";
import BIRDS from "vanta/dist/vanta.birds.min";
import CLOUDS from "vanta/dist/vanta.clouds.min";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  position: relative;
  max-width: 2000px;
  max-height: 1100px;
  width: 100%;
`;

const getWindowDimensions = () => {
  const { innerWidth: width, innerHeight: height } = window;
  return {
    width,
    height,
  };
};

const useWindowDimensions = () => {
  const [windowDimensions, setWindowDimensions] = useState(
    getWindowDimensions()
  );

  useEffect(() => {
    const handleResize = () => setWindowDimensions(getWindowDimensions());
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return windowDimensions;
};

const Hero = (props) => {
  const { width } = useWindowDimensions();
  const [vantaEffect, setVantaEffect] = useState(0);
  const [vantaEffectTwo, setVantaEffectTwo] = useState(0);
  const bgRef = useRef(null);
  const bgRefTwo = useRef(null);
  const { children } = props;
  useEffect(() => {
    if (!vantaEffect) {
      setVantaEffect(
        BIRDS({
          el: bgRef.current,
          mouseControls: true,
          touchControls: width >= 767 ? true : false,
          gyroControls: width >= 767 ? false : true,
          minHeight: width >= 767 ? 200.0 : 600.0,
          minWidth: 200.0,
          scale: 1.0,
          scaleMobile: 1.0,
          backgroundColor: 0x60aee8,
          backgroundAlpha: 0.0,
          color1: 0xe870b1,
          color2: 0xffde67,
          colorMode: "variance",
          birdSize: 1.7,
          wingSpan: 20.0,
          separation: 30.0,
          alignment: 50.0,
          cohesion: 35.0,
          quantity: 3.0,
        })
      );
      setVantaEffectTwo(
        CLOUDS({
          el: bgRefTwo.current,
          minHeight: width >= 767 ? 200.0 : 1000.0,
          minWidth: 200.0,
          skyColor: 0x9ebce8,
          cloudColor: 0xb9b3d4,
          cloudShadowColor: 0xb15d3b,
          sunGlareColor: 0x464646,
          sunlightColor: 0x7e96c3,
          speed: 1,
        })
      );
    }
    return () => {
      if (vantaEffect && vantaEffectTwo) {
        vantaEffect.destroy();
        vantaEffectTwo.destroy();
      }
    };
  }, [vantaEffect]);
  return (
    <div ref={bgRefTwo} style={{ marginBottom: width >= 767 ? "auto" : "75%" }}>
      <Container ref={bgRef}>{children}</Container>
    </div>
  );
};

export default Hero;

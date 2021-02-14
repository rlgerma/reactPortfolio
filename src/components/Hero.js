import React, { useState, useEffect, useRef } from 'react';
import BIRDS from 'vanta/dist/vanta.birds.min';
import CLOUDS from 'vanta/dist/vanta.clouds.min';
import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  position: relative;
  max-width: 2000px;
  max-height: 1100px;
  width: 100%;
`;

const Hero = props => {
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
          touchControls: true,
          gyroControls: false,
          minHeight: 200.0,
          minWidth: 200.0,
          scale: 1.0,
          scaleMobile: 1.0,
          backgroundColor: 0x60aee8,
          backgroundAlpha: 0.0,
          color1: 0xe870b1,
          color2: 0xffde67,
          colorMode: 'variance',
          birdSize: 1.7,
          wingSpan: 20.0,
          separation: 30.0,
          alignment: 50.0,
          cohesion: 35.0,
          quantity: 4.0,
        })
      );
      setVantaEffect(
        CLOUDS({
          el: bgRefTwo.current,
          minHeight: 200.0,
          minWidth: 200.0,
          skyColor: 0x9ebce8,
          cloudColor: 0xb9b3d4,
          cloudShadowColor: 0xb15d3b,
          sunGlareColor: 0x464646,
          sunlightColor: 0x7e96c3,
          speed: 1.5,
        })
      );
    }
    return () => {
      if (vantaEffect) vantaEffect.destroy();
    };
  }, [vantaEffect]);
  return (
    <div ref={bgRefTwo}>
      <Container ref={bgRef}>{children}</Container>
    </div>
  );
};

export default Hero;

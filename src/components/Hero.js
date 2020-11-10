import React, { useState, useEffect, useRef } from 'react';
import GLOBE from 'vanta/dist/vanta.globe.min';
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
  const bgRef = useRef(null);
  const { children } = props;
  useEffect(() => {
    if (!vantaEffect) {
      setVantaEffect(
        GLOBE({
          el: bgRef.current,
          mouseControls: true,
          touchControls: true,
          gyroControls: false,
          minHeight: 400.0,
          minWidth: 400.0,
          scale: 1.0,
          scaleMobile: 1.0,
          color: 0x037f8c,
          backgroundColor: 0x141018,
        })
      );
    }
    return () => {
      if (vantaEffect) vantaEffect.destroy();
    };
  }, [vantaEffect]);
  return <Container ref={bgRef}>{children}</Container>;
};

export default Hero;

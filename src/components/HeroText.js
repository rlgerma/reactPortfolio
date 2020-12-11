import React from 'react';
import styled from 'styled-components';
import media from '../utils/style';
const StyledTypist = styled.div`
  color: #fff;
  letter-spacing: 1rem;
  margin: 25% auto 10%;
  font-size: 3em;
  line-height: 5vh;
  font-weight: 400;
  text-transform: uppercase;
  text-shadow: 1px 1px #037f8c;
  font-family: 'Name';
  ${media.xs`
    font-size:32px;
    line-height: 44px;
    letter-spacing: 8px;
    margin: 70% auto auto;
    text-align:center;
  `}
`;

function HeroText(props) {
  const { text } = props;
  if (text) {
    return (
      <StyledTypist cursor={{ show: false }}>
        <strong>{text.split(' ').slice(0, 1)}</strong>
        <br />
        {text
          .split(' ')
          .slice(1)
          .join(' ')}
      </StyledTypist>
    );
  }
  return (
    <StyledTypist>
      <strong>Let's Make Connections</strong>
    </StyledTypist>
  );
}

export default HeroText;

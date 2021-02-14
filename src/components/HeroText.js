import React from 'react';
import styled from 'styled-components';
import media from '../utils/style';
const StyledTypist = styled.div`
  color: #343a3f;
  letter-spacing: 1rem;
  margin: 25% auto 10%;
  font-size: 3rem;
  font-weight: 400;
  text-transform: uppercase;
  text-shadow: 1px 1px #f3f6f9;
  font-family: 'Name';
  top: 2.50125rem;

  ${media.xs`
    font-size:32px;
    line-height: 44px;
    letter-spacing: 8px;

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
      <strong>rgermaine</strong>
    </StyledTypist>
  );
}

export default HeroText;

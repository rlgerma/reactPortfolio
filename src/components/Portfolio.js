import React from 'react';
import styled from 'styled-components';

import media from '../utils/style';

const Item = styled.div`
  width: 60%;
  margin: 0 auto;
  margin-bottom: 1.5em;
`;

const Company = styled.h3`
  display: block;
  letter-spacing: 2px;
  font-weight: 700;
  float: left;
  ${media.xs`
    float:none;
  `}
`;

const Duration = styled.div`
  display: block;
  float: right;
  clear: both;
  ${media.xs`
    float:none;
  `}
`;

const Position = styled.div`
  display: block;
  clear: both;
  text-align: left;
  ${media.xs`
    text-align: center;
  `}
`;

function Portfolio() {
  return (
    <>
      <Item>
        <Duration></Duration>
        <Company></Company>
        <Position></Position>
      </Item>
    </>
  );
}

export default Portfolio;

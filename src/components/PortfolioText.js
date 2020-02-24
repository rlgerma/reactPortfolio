import React from 'react';
import styled from 'styled-components';
import media from '../utils/style';
import Portfolio from './Portfolio';
import { Link } from 'gatsby';

const Item = styled.div`
  width: 40%;
  height: 425px;
  margin: 0 auto;
  margin-bottom: 1.5em;
`;

const Title = styled.h3`
  display: block;
  letter-spacing: 2px;
  font-weight: 700;
  ${media.xs`
    float:none;
  `}
`;

const About = styled.div`
  display: block;
  text-align: justify;
  clear: both;
  ${media.xs`
    float:none;
  `}
`;

const Url = styled.div`
  margin-top: 5%;
  display: block;
  clear: both;
  text-align: center;
  ${media.xs`
    text-align: center;
  `}
`;

function PortfolioText(props) {
  const { edges } = props;
  return (
    <>
      {edges.map(({ node: item }) => (
        <Item key={item.id}>
          <Title>{item.title}</Title>
          <About>{item.about}</About>
          <Url>
            <a href={item.url}>{item.url}</a>
          </Url>
        </Item>
      ))}
    </>
  );
}

export default PortfolioText;

import React from 'react';
import styled from 'styled-components';
import media from '../utils/style';

const Item = styled.div`
  width: 400px;
  height: 200px;
  margin: 0 auto;
  margin-bottom: 5%;
  margin-right: 5%;
  ${media.xs`
    visibility: hidden;
  `}
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
  text-align: justify;
  clear: both;
  ${media.xs`
    float:none;
  `}
`;

const Url = styled.div`
  margin-top: 5%;
  margin-bottom: 5%;
  clear: both;
  ${media.xs`
    text-align: left;
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

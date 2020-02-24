import React from 'react';
import styled from 'styled-components';
import media from '../utils/style';

const Item = styled.div`
  width: 40%;
  height: auto;
  margin: 0 auto;
  margin-bottom: 1.5em;
`;
export const Wrapper = styled.div`
  display: block;
  ${media.xs`
    visibility: hidden;
  `}
`;

const Title = styled.h3`
  display: block;
  letter-spacing: 2px;
  font-weight: 500;

  ${media.xs`
    float:none;
        display:flex;

    font-size:flex;
  `}
`;

const About = styled.div`
  display: block;
  text-align: justify;
  margin-top: 5%;
  clear: both;
  ${media.xs`
    float:none;
    display:flex;
    font-size: flex;
  `}
`;

const Url = styled.div`
  display: block;
  clear: both;
  text-align: center;
  ${media.xs`
    float:none;
    display:flex;
    font-size: flex;
  `}
`;

function PortfolioText(props) {
  const { edges } = props;
  return (
    <>
      {edges.map(({ node: item }) => (
        <Wrapper>
          <Item key={item.id}>
            <Title>{item.title}</Title>

            <About>{item.about}</About>

            <Url>
              <a href={item.url}>{item.url}</a>
            </Url>
          </Item>
        </Wrapper>
      ))}
    </>
  );
}

export default PortfolioText;

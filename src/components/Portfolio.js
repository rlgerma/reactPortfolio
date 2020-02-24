import React from 'react';
import styled from 'styled-components';
import Img from 'gatsby-image';
import media from '../utils/style';
const Item = styled.div`
  width: 400px;
  height: 200px;
  margin: 0 auto;
  margin-bottom: 5%;
  ${media.xs`
  align-content: center;
  `}
`;

function Portfolio(props) {
  const { edges } = props;
  return (
    <>
      {edges.map(({ node: item }) => (
        <Item key={item.id}>
          <Img fixed={item.fixed} />
        </Item>
      ))}
    </>
  );
}

export default Portfolio;

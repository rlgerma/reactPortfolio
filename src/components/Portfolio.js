import React from 'react';
import styled from 'styled-components';
import Img from 'gatsby-image';

const Item = styled.div`
  width: 60%;
  margin: 0 auto;
  margin-bottom: 1.5em;
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

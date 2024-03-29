import React from "react";
import styled from "styled-components";
import Img, { FixedObject } from "gatsby-image";

import media from "../utils/style";

const Wrapper = styled.div`
  width: 65%;
  margin: 0 auto;

  ${media.xs`
      width:100%;
    `}
`;

const Item = styled.div`
  padding: 1.5em;

  ${media.xs`
    padding:1em;
  `}
  display:inline-block;
  transition: 0.2s ease all;
  -webkit-transition: 0.2s ease all;
  -o-transition: 0.2s ease all;
  :hover {
    cursor: not-allowed;
    -webkit-transform: scale(1.1);
    -ms-transform: scale(1.1);
    transform: scale(1.1);
  }
`;

export interface TechnologiesProps {
  node: {
    id: string;
    fixed: FixedObject;
  };
}

const Technologies = (props: { edges: TechnologiesProps[] }): JSX.Element => (
  <Wrapper>
    {props.edges.map(({ node: item }) => (
      <Item key={item.id}>
        <Img fixed={item.fixed} />
      </Item>
    ))}
  </Wrapper>
);

export default Technologies;

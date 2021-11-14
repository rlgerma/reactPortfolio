import React from "react";
import styled from "styled-components";

const Base = styled.a`
  font-size: 1.5em;
  font-weight: 700;
  font-family: "name";
  color: #fff;
  margin: 5px 0;
  width: 100%;
  white-space: nowrap;
  transition-property: transform;
  transition-duration: 0.8s;
`;

const Name = (): JSX.Element => <Base href='/'>R G</Base>;

export default Name;

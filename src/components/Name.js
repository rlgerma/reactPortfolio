import React from 'react';
import styled, { css } from 'styled-components';

const Base = styled.a`
  font-size: 1.5em;
  font-weight: 700;
  font-family: 'name';
  color: #fff;
  margin: 5px 0;
  width: 100%;
  white-space: nowrap;
  transition-property: transform;
  transition-duration: 0.8s;

  ${props =>
    props.dark &&
    css`
      color: #444;
    `}
  ${props =>
    props.block &&
    css`
      display: block;
    `}
  ${props =>
    props.small &&
    css`
      font-size: 1em;
    `}
  ${props =>
    props.big &&
    css`
      font-size: 2em;
    `}
`;

function Name() {
  return <Base href="/">R G</Base>;
}

export default Name;

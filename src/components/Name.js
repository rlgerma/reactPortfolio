import React from 'react';
import styled, { css } from 'styled-components';
import Pattern from '../assets/images/move.gif';

const Base = styled.a`
  font-size: 20pt;
  font-weight: 700;
  font-family: 'name';
  color: #fff;
  margin: 20px 0;
  width: 100%;
  white-space: nowrap;
  transition-property: transform;
  transition-duration: 0.8s;
  &:hover {
    cursor: pointer;
    -webkit-text-fill-color: transparent;
    -webkit-background-clip: text;
    background-image: url(${Pattern}) ;
    background-position: center;
    background-repeat: repeat-x;
    text-decoration: none;
    -webkit-transform:rotate(354deg);
  }
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
  return <Base href="/">Richard Germaine</Base>;
}

export default Name;

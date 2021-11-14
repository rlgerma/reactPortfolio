import React from "react";
import { Link as GatsbyLink } from "gatsby";

interface LinkProps {
  to: string;
  children: string;
}

const Link = (props: LinkProps): JSX.Element => {
  const internal = /^\/(?!\/)/.test(props.to);

  if (internal) {
    return <GatsbyLink to={props.to}>{props.children}</GatsbyLink>;
  }
  return (
    <a href={props.to} target='_blank' rel='noopener noreferrer'>
      {props.children}
    </a>
  );
};

export default Link;

import React from "react";
import { Link as GatsbyLink } from "gatsby";

const Link = ({ children, to }) => {
  const internal = /^\/(?!\/)/.test(to);

  if (internal) {
    return <GatsbyLink to={to}>{children}</GatsbyLink>;
  }
  return (
    <a href={to} target='_blank' rel='noopener noreferrer'>
      {children}
    </a>
  );
};

export default Link;

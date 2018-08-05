import React from "react";

// presentational component
const Link = ({ active, children, onClick }) => {
  if (active) return <span>{children}</span>;
  return (
    <a
      href="www.google.com"
      onClick={e => {
        e.preventDefault();
        onClick();
      }}
    >
      {children}
    </a>
  );
};

export default Link;

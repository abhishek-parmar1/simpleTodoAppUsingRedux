import React from "react";

// import the store
import { store } from "../../index";

// presentational component
const FilterLink = ({ filter, currentFilter, children, onClick }) => {
  if (filter === currentFilter) return <span>{children}</span>;
  return (
    <a
      href="www.google.com"
      onClick={e => {
        e.preventDefault();
        onClick(filter);
      }}
    >
      {children}
    </a>
  );
};

export default FilterLink;

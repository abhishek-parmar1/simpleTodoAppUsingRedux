import React from "react";

// import the store
import { store } from "../../index";

// function component
const FilterLink = ({ filter, children }) => {
  return (
    <a
      href="www.google.com"
      onClick={e => {
        e.preventDefault();
        store.dispatch({ type: "SET_VISIBILITY_FILTER", payload: filter });
      }}
    >
      {children}
    </a>
  );
};

export default FilterLink;

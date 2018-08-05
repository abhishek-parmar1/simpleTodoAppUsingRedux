import React from "react";

//import components here
import FilterLink from "../filterLink/filterLink";

// presentational component
const Footer = ({ store }) => (
  <p>
    Show:{" "}
    <FilterLink filter="SHOW_ALL" store={store}>
      ALL
    </FilterLink>{" "}
    <FilterLink filter="SHOW_ACTIVE" store={store}>
      Active
    </FilterLink>{" "}
    <FilterLink filter="SHOW_COMPLETED" store={store}>
      Completed
    </FilterLink>
  </p>
);
export default Footer;

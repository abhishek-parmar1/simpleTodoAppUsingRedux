import React from "react";

// presentational components
const todo = ({ onClick, id, text, completed }) => {
  return (
    <li
      onClick={onClick}
      style={{
        textDecoration: completed ? "line-through" : "none"
      }}
    >
      {id}||{text}
    </li>
  );
};

export default todo;

import React from "react";

// import components here
import Todo from "../todo/todo";

// functional component
const TodoList = ({ todos, onTodoClick }) => (
  <ul>
    {todos.map(todo => (
      <Todo key={todo.id} {...todo} onClick={() => onTodoClick(todo.id)} />
    ))}
  </ul>
);
export default TodoList;

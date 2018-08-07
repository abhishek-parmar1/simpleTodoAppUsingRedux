import React from "react";

// import components here
import Todo from "../todo/todo";

// functional component
const TodoList = ({ todos, toggleTodo }) => (
  <ul>
    {todos.map(todo => (
      <Todo key={todo.id} {...todo} onClick={() => toggleTodo(todo.id)} />
    ))}
  </ul>
);
export default TodoList;

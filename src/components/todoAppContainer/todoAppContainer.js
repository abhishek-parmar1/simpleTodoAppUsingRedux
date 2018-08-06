import React from "react";

// import the component here
import VisibleTodoList from "../visibleTodoList/visibleTodoList";
import AddTodo from "../addTodo/addTodo";
import Footer from "../footer/footer";

// non function container component
const TodoAppContainer = ({ store }) => (
  <div className="Todo-App">
    <h1>Simple Todo App using react and redux created with codesandbox</h1>
    <AddTodo />
    <VisibleTodoList />
    <Footer />
  </div>
);
export default TodoAppContainer;

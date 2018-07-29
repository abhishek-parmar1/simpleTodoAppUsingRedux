import React, { Component } from "react";

// import the store
import { store } from "../../index";

// import the filter component
import FilterLink from "../filterLink/filterLink";

// import utils here
import { getVisibleTodos } from "../../utils/utils";

// non function component
class TodoApp extends Component {
  render() {
    let visibleTodoList = getVisibleTodos(
      this.props.visibilityFilter,
      this.props.todoList
    );

    console.log("actual", this.props.todoList);
    console.log("filtered", visibleTodoList);

    return (
      <div className="Todo-App">
        <h1>Simple Todo App using react and redux created with codesandbox</h1>
        <input ref={node => (this.input = node)} />
        <button
          onClick={() => {
            store.dispatch({
              type: "ADD_TODO",
              payload: {
                text: this.input.value,
                id: this.props.nextId,
                completed: false
              }
            });
            store.dispatch({ type: "GENERATE_NEXT_ID" });
            this.input.value = "";
          }}
        >
          Add Todo
        </button>
        <ul>
          {visibleTodoList.map(todo => (
            <li
              key={todo.id}
              onClick={() =>
                store.dispatch({
                  type: "TOGGLE_TODO",
                  payload: todo.id
                })
              }
              style={{
                textDecoration: todo.completed ? "line-through" : "none"
              }}
            >
              {todo.id} || {todo.text}
            </li>
          ))}
        </ul>
        <p>
          Show: <FilterLink filter="SHOW_ALL">ALL</FilterLink>{" "}
          <FilterLink filter="SHOW_ACTIVE">Active</FilterLink>{" "}
          <FilterLink filter="SHOW_COMPLETED">Completed</FilterLink>
        </p>
      </div>
    );
  }
}
export default TodoApp;

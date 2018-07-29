import React, { Component } from "react";

// import the store
import { store } from "../../index";

// import the filter component
import FilterLink from "../filterLink/filterLink";

// non function component
class TodoApp extends Component {
  render() {
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
                id: this.props.nextId
              }
            });
            store.dispatch({ type: "GENERATE_NEXT_ID" });
            this.input.value = "";
          }}
        >
          Add Todo
        </button>
        <ul>
          {this.props.todoList.map(todo => (
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
          <FilterLink filter="SHOW_COMLETED">Completed</FilterLink>
        </p>
      </div>
    );
  }
}
export default TodoApp;

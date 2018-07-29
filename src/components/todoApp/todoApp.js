import React, { Component } from "react";
import { store } from "../../index";

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
      </div>
    );
  }
}
export default TodoApp;

import React, { Component } from "react";

// import the store
import { store } from "../../index";

// import the component here
import FilterLink from "../filterLink/filterLink";
import TodoList from "../todoList/todoList";
import AddTodo from "../addTodo/addTodo";

// import utils here
import { getVisibleTodos } from "../../utils/utils";

// non function component
class TodoApp extends Component {
  render() {
    const { visibilityFilter, todoList, nextId } = this.props;
    let visibleTodoList = getVisibleTodos(visibilityFilter, todoList);

    return (
      <div className="Todo-App">
        <h1>Simple Todo App using react and redux created with codesandbox</h1>
        <AddTodo
          onAddClick={text => {
            store.dispatch({
              type: "ADD_TODO",
              payload: {
                text: text,
                id: nextId,
                completed: false
              }
            });
            store.dispatch({ type: "GENERATE_NEXT_ID" });
          }}
        />
        <TodoList
          todos={visibleTodoList}
          onTodoClick={id =>
            store.dispatch({
              type: "TOGGLE_TODO",
              payload: id
            })
          }
        />
        <p>
          Show:{" "}
          <FilterLink filter="SHOW_ALL" currentFilter={visibilityFilter}>
            ALL
          </FilterLink>{" "}
          <FilterLink filter="SHOW_ACTIVE" currentFilter={visibilityFilter}>
            Active
          </FilterLink>{" "}
          <FilterLink filter="SHOW_COMPLETED" currentFilter={visibilityFilter}>
            Completed
          </FilterLink>
        </p>
      </div>
    );
  }
}
export default TodoApp;

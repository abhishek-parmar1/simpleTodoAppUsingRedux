import React from "react";

// import the store
import { store } from "../../index";

// import the component here
import TodoList from "../todoList/todoList";
import AddTodo from "../addTodo/addTodo";
import Footer from "../footer/footer";

// import utils here
import { getVisibleTodos } from "../../utils/utils";

// non function container component
const TodoAppContainer = ({ visibilityFilter, todoList, nextId }) => (
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
      todos={getVisibleTodos(visibilityFilter, todoList)}
      onTodoClick={id =>
        store.dispatch({
          type: "TOGGLE_TODO",
          payload: id
        })
      }
    />
    <Footer />
  </div>
);
export default TodoAppContainer;

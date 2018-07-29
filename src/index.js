import React from "react";
import ReactDOM from "react-dom";
import { combineReducers, createStore } from "redux";

import "./styles.css";

// import the components
import TodoApp from "./components/todoApp/todoApp";

// import reducers
import * as reducers from "./reducers";

// store configuration
const rootReducer = combineReducers({ ...reducers });
export const store = createStore(rootReducer);

// component rendering configuration
const rootElement = document.getElementById("root");
const render = () => {
  ReactDOM.render(
    <TodoApp
      todoList={store.getState().todoList}
      nextId={store.getState().nextId}
    />,
    rootElement
  );
};

// call the render function whenever the state changes
store.subscribe(render);
// first time component rendering
render();

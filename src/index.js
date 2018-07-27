import React from "react";
import ReactDOM from "react-dom";
import { combineReducers, createStore } from "redux";

import "./styles.css";

// import reducers
import * as reducers from "./reducers";

// store configuration
const rootReducer = combineReducers({ ...reducers });
const store = createStore(rootReducer);

// import the components
import TodoApp from "./components/todoApp/todoApp";

// component rendering configuration
const rootElement = document.getElementById("root");
const render = () => {
  ReactDOM.render(<TodoApp />, rootElement);
};

// call the render function whenever the state changes
store.subscribe(render);
// first time component rendering
render();

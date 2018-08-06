import React, { Component } from "react";
import { PropTypes } from "prop-types";

// import utils here
import { getVisibleTodos } from "../../utils/utils";

// import the components here
import TodoList from "../todoList/todoList";

// functional component
class VisibleTodoList extends Component {
  componentDidMount() {
    const { store } = this.context;
    this.unsubscribe = store.subscribe(() => {
      // to forcce fully update the component when state changes
      this.forceUpdate();
    });
  }

  componentWillUnmount() {
    this.unsubscribe();
  }

  render() {
    const props = this.props;
    const { store } = this.context;
    const state = store.getState();
    return (
      <TodoList
        todos={getVisibleTodos(state.visibilityFilter, state.todoList)}
        onTodoClick={id =>
          store.dispatch({
            type: "TOGGLE_TODO",
            payload: id
          })
        }
      />
    );
  }
}

VisibleTodoList.contextTypes = {
  store: PropTypes.object
};

export default VisibleTodoList;

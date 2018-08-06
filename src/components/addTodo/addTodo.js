import React, { Component } from "react";
import { PropTypes } from "prop-types";

// functional component
class AddTodo extends Component {
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
    let input;

    return (
      <div>
        <input ref={node => (input = node)} />
        <button
          onClick={() => {
            store.dispatch({
              type: "ADD_TODO",
              payload: {
                text: input.value,
                id: state.nextId,
                completed: false
              }
            });
            store.dispatch({ type: "GENERATE_NEXT_ID" });
            input.value = "";
          }}
        >
          Add Todo
        </button>
      </div>
    );
  }
}

AddTodo.contextTypes = {
  store: PropTypes.object
};

export default AddTodo;

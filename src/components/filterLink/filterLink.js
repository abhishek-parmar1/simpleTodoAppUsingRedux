import React, { Component } from "react";
import { PropTypes } from "prop-types";

// import th components here
import Link from "../link/link";

// functional component
class FilterLink extends Component {
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
      <Link
        active={props.filter === state.visibilityFilter}
        onClick={() => {
          store.dispatch({
            type: "SET_VISIBILITY_FILTER",
            payload: props.filter
          });
        }}
      >
        {props.children}
      </Link>
    );
  }
}

FilterLink.contextTypes = {
  store: PropTypes.object
};

export default FilterLink;

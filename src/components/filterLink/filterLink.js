import React from "react";
import { connect } from "react-redux";

// import th components here
import Link from "../link/link";

// functional component
let FilterLink = ({ children, active, onClick }) => {
  return <Link active={active} onClick={onClick} />;
};

// ownProps is for the props of the outer (container) component
const mapStateToProps = (state, ownProps) => {
  return {
    active: state.visibilityFilter === ownProps.filter
  };
};

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    onClick: () => {
      dispatch({
        type: "SET_VISIBILITY_FILTER",
        payload: ownProps.filter
      });
    }
  };
};

// it will work because there are two components
// 1st inner FilterLink component (functional component)
// 2nd outer FilterLink component (container component)
// we have no reference to inner FilterLink component because of re-assignment
// but we have reference to outter FilterLink and we use it and passes it the the props
FilterLink = connect(
  mapStateToProps,
  mapDispatchToProps
)(Link);

export default FilterLink;

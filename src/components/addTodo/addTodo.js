import React from "react";
import { connect } from "react-redux";

// functional component
let AddTodo = ({ dispatch, nextId }) => {
  let input;

  return (
    <div>
      <input ref={node => (input = node)} />
      <button
        onClick={() => {
          dispatch({
            type: "ADD_TODO",
            payload: {
              text: input.value,
              id: nextId,
              completed: false
            }
          });
          dispatch({ type: "GENERATE_NEXT_ID" });
          input.value = "";
        }}
      >
        Add Todo
      </button>
    </div>
  );
};

const mapStateToProps = state => {
  return {
    nextId: state.nextId
  };
};

const mapDispatchToProps = dispatch => {
  return { dispatch };
};

// it will work because there are two components
// 1st inner AddTodo component (functional component)
// 2nd outer AddTodo component (container component)
// we have no reference to inner AddTodo component because of re-assignment
// but we have reference to outter AddTodo and we use it and passes it the the props
AddTodo = connect(
  mapStateToProps,
  mapDispatchToProps
)(AddTodo);

export default AddTodo;

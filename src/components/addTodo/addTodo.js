import React from "react";
import { connect } from "react-redux";

// import your actions here
import mapDispatchToProps from "../../factory";

// functional component
let AddTodo = ({ addTodo, generateNextId, nextId }) => {
  let input;

  return (
    <div>
      <input ref={node => (input = node)} />
      <button
        onClick={() => {
          addTodo({
            text: input.value,
            id: nextId,
            completed: false
          });
          generateNextId({ type: "GENERATE_NEXT_ID" });
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

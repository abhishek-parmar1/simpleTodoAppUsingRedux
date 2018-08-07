import { bindActionCreators } from "redux";

import {
  addTodo,
  removeTodo,
  toggleTodo,
  setVisibilityFilter,
  generateNextId
} from "./actions";

// it will recive dispatch as an store dispatch
// bindActionCreators will wrap the actions in the dispatch
const mapDispatchToProps = dispatch => {
  return bindActionCreators(
    {
      addTodo,
      removeTodo,
      toggleTodo,
      setVisibilityFilter,
      generateNextId
    },
    dispatch
  );
};

export default mapDispatchToProps;

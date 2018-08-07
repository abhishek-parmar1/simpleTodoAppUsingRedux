import { connect } from "react-redux";

// import utils here
import { getVisibleTodos } from "../../utils/utils";

// import the components here
import TodoList from "../todoList/todoList";

const mapStateToProps = state => {
  return {
    todos: getVisibleTodos(state.visibilityFilter, state.todoList)
  };
};

const mapDispatchToProps = dispatch => {
  return {
    onTodoClick: id => {
      dispatch({
        type: "TOGGLE_TODO",
        payload: id
      });
    }
  };
};

// a simple container component with no html to render
const VisibileTodoList = connect(
  mapStateToProps,
  mapDispatchToProps
)(TodoList);

export default VisibileTodoList;

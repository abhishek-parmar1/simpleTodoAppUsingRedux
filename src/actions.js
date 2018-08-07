import {
  ADD_TODO,
  REMOVE_TODO,
  TOGGLE_TODO,
  SET_VISIBILITY_FILTER,
  GENERATE_NEXT_ID
} from "./constants";

const actionFactory = action => payload => ({ type: action, payload });

export const addTodo = actionFactory(ADD_TODO);
export const removeTodo = actionFactory(REMOVE_TODO);
export const toggleTodo = actionFactory(TOGGLE_TODO);

export const setVisibilityFilter = actionFactory(SET_VISIBILITY_FILTER);

export const generateNextId = actionFactory(GENERATE_NEXT_ID);

export const todoList = (state = [], action) => {
  switch (action.type) {
    case "ADD_TODO":
      return [...state, action.payload];
    case "REMOVE_TODO":
      return state.filter(t => t.id !== action.payload);
    case "TOGGLE_TODO":
      return state.map(
        t =>
          t.id === action.payload ? { ...t, completed: !t.completed } : { ...t }
      );
    default:
      return state;
  }
};

export const visibilityFilter = (state = "SHOW_ALL", action) => {
  switch (action.type) {
    case "SET_VISIBILITY_FILTER":
      return action.payload;
    default:
      return state;
  }
};

export const nextId = (state = 1, action) => {
  switch (action.type) {
    case "GENERATE_NEXT_ID":
      return ++state;
    default:
      return state;
  }
};

export const getVisibleTodos = (filter, todoList) => {
  switch (filter) {
    case "SHOW_ALL":
      return todoList;
    case "SHOW_COMPLETED":
      return todoList.filter(t => t.completed);
    case "SHOW_ACTIVE":
      return todoList.filter(t => !t.completed);
    default:
      return todoList;
  }
};

function markAsDone(todos) {
  todos.forEach(todo => {
    todo.description = `done - ${todo.description}`;
  });

  return todos;
}

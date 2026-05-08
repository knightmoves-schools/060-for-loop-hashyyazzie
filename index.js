function markAsDone(todos) {
  for (const todo of todos) {
    todo.description = 'done - ' + todo.description;
  }

  return todos;
}

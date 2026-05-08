function markAsDone(todos) {
  for (let i = 0; i < todos.length; i++) {
    todos[i].description = "done - " + todos[i].description;
  }

  return todos;
}

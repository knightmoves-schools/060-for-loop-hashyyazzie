function markAsDone(todos) {
  todos.forEach(function(todo) {
    todo.description = "done - " + todo.description;
  });

  return todos;
}

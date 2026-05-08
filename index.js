/**
 * Prepends 'done - ' to each todo description in the array.
 * @param {string[]} todos - An array of todo descriptions.
 * @returns {string[]} - The modified array of todos.
 */
function markAsDone(todos) {
  return todos.map(todo => `done - ${todo}`);
}

// Example usage:
const myTodos = ['buy milk', 'clean room', 'call mom'];
const finishedTodos = markAsDone(myTodos);

console.log(finishedTodos); 
// Output: ['done - buy milk', 'done - clean room', 'done - call mom']

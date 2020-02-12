const todos = [{
  text: 'Learn JavaScript',
  completed: false
}, {
  text: 'Let the dogs out',
  completed: false
}, {
  text: 'Write the dance syllabus',
  completed: false
}, {
  text: 'Buy food',
  completed: true
}, {
  text: 'Check the Taobao deliveries',
  completed: true
}, {
  text: 'Talk to Gary',
  completed: false
}]

console.log(todos)

const deleteTodo = function (todos, text) {
  index = todos.findIndex(function(todo) {
    return todo.text.toLowerCase() === text.toLowerCase()
  })

  if (index > -1) {
    todos.splice(index, 1)
  }
}

const getThingsToDo = function (todos) {
  return todos.filter(function (todo) {
    return !todo.completed
  })
}

console.log(getThingsToDo(todos))

// deleteTodo(todos, 'buy food')
// console.log(todos)
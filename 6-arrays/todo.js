const todos = [{
  text: 'Learn JavaScript',
  completed: false
}, {
  text: 'Let the dogs out',
  completed: true
}, {
  text: 'Write the dance syllabus',
  completed: false
}, {
  text: 'Buy food',
  completed: false
}, {
  text: 'Check the Taobao deliveries',
  completed: true
}, {
  text: 'Talk to Gary',
  completed: true
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

const sortTodos = function (todos) {
  todos.sort(function(a, b) {
    if (!a.completed && b.completed) {
      return -1
    } else if (a.completed && !b.completed) {
      return 1
    } else {
      return 0
    }
  })
}

sortTodos(todos)

// console.log(getThingsToDo(todos))
// deleteTodo(todos, 'buy food')
console.log(todos)

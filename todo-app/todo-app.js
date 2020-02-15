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


const incompleteTodos = todos.filter(function (todo) {
  return !todo.completed
})

const summary = document.createElement('h2')
summary.textContent = `You have ${incompleteTodos.length} todos left.`
document.querySelector('body').appendChild(summary)


todos.forEach(function (todo) {
  const p = document.createElement('p')
  p.textContent = todo.text
  document.querySelector('body').appendChild(p)
})

// Listen for new todo text input
document.querySelector('#new-todo-text').addEventListener('input', function (e) {
  console.log(e.target.value)
})

// Listen for new todo button click
document.querySelector('#add-todo').addEventListener('click', function () {
  console.log('New Todo button was clicked')
})
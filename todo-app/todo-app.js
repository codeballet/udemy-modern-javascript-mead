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


// Filters
const filters = {
  searchText: '',
  hideCompleted: false
}

// Render Todos list based on filters
const renderTodos = function (todos, filters) {
  const filteredTodos = todos.filter(function (todo) {
    const searchTextMatch = todo.text.toLowerCase().includes(filters.searchText.toLowerCase())
    const hideCompletedMatch = !filters.hideCompleted || !todo.completed
    return searchTextMatch && hideCompletedMatch
  })

  const incompleteTodos = filteredTodos.filter(function (todo) {
    return !todo.completed
  })
  
  document.querySelector('#todos').innerHTML = ''
  
  const summary = document.createElement('h2')
  summary.textContent = `You have ${incompleteTodos.length} todos left.`
  document.querySelector('#todos').appendChild(summary)

  
  filteredTodos.forEach(function (todo) {
    const p = document.createElement('p')
    p.textContent = todo.text
    document.querySelector('#todos').appendChild(p)
  })
}


// Listeners
document.querySelector('#search-todos').addEventListener('input', function (e) {
  filters.searchText = e.target.value
  renderTodos(todos, filters)
})

document.querySelector('#new-todo').addEventListener('submit', function (e) {
  e.preventDefault()
  todos.push({
    text: e.target.elements.todoText.value,
    completed: false
  })
  renderTodos(todos, filters)
  e.target.elements.todoText.value = ''
})

document.querySelector('#hide-completed').addEventListener('change', function (e) {
  filters.hideCompleted = e.target.checked
  renderTodos(todos, filters)
})

// Function initiators
renderTodos(todos, filters)

'use strict'

const todos = getSavedTodos()

const filters = {
  searchText: '',
  hideCompleted: false
}

renderTodos(todos, filters)

// Listeners
document.querySelector('#search-todos').addEventListener('input', (e) => {
  filters.searchText = e.target.value
  renderTodos(todos, filters)
})

document.querySelector('#new-todo').addEventListener('submit', (e) => {
  e.preventDefault()
  const cleanText = e.target.elements.todoText.value.trim()

  if (cleanText.length > 0) {
    todos.push({
      id: uuidv4(),
      text: cleanText,
      completed: false
    })
    saveTodos(todos)
    renderTodos(todos, filters)
    e.target.elements.todoText.value = ''
  } else {

  }
})

document.querySelector('#hide-completed').addEventListener('change', (e) => {
  filters.hideCompleted = e.target.checked
  renderTodos(todos, filters)
})

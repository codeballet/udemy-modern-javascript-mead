import { setFilters } from './filters'
import { loadTodos, createTodo } from './todos'
import { renderTodos } from './views'

renderTodos()

document.querySelector('#search-todos').addEventListener('input', (e) => {
  setFilters({
    searchText: e.target.value
  })
  renderTodos()
})

document.querySelector('#hide-completed').addEventListener('change', (e) => {
  setFilters({
    hideCompleted: e.target.checked
  })
  renderTodos()
})

document.querySelector('#new-todo').addEventListener('submit', (e) => {
  e.preventDefault()
  const text = e.target.elements.todoText.value.trim()

  if (text.length > 0) {
    createTodo(text)
    renderTodos()
    e.target.elements.todoText.value = ''
  }

})

window.addEventListener('storage', (e) => {
  if (e.key === 'todos') {
    loadTodos()
    renderTodos()
  }
})
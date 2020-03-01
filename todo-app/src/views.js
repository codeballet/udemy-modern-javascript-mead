import { getFilters } from './filters'
import { getTodos, removeTodo, toggleTodo } from './todos'

const renderTodos = () => {
  const filters = getFilters()
  const todosEl = document.querySelector('#todos')
  const filteredTodos = getTodos().filter((todo) => {
    const searchTextMatch = todo.text.toLowerCase().includes(filters.searchText.toLowerCase())
    const hideCompletedMatch = !filters.hideCompleted || !todo.completed
    return searchTextMatch && hideCompletedMatch
  })

  const incompleteTodos = filteredTodos.filter((todo) => !todo.completed)

  todosEl.innerHTML = ''
  
  todosEl.appendChild(
    generateSummaryDOM(incompleteTodos)
  )

  if (filteredTodos.length > 0) {
    filteredTodos.forEach((todo) => {
      todosEl.appendChild(generateTodoDOM(todo))
    }) 
  } else {
    const emptyMessageEl = document.createElement('p')
    emptyMessageEl.classList.add('empty-message')
    emptyMessageEl.textContent = 'No todos to show.'
    todosEl.appendChild(emptyMessageEl)
  }
}

const generateTodoDOM = (todo) => {
  const todoEl = document.createElement('label')
  const containerEl = document.createElement('div')
  const checkbox = document.createElement('input')
  const todoText = document.createElement('span')
  const removeButton = document.createElement('button')

  // Setup todo checkbox
  checkbox.setAttribute('type', 'checkbox')
  checkbox.checked = todo.completed
  containerEl.appendChild(checkbox)
  checkbox.addEventListener('click', () => {
    toggleTodo(todo.id)
    renderTodos()
  })
  
  // Setup the todo text
  todoText.textContent = todo.text
  containerEl.appendChild(todoText)

  // Setup container
  todoEl.classList.add('list-item')
  containerEl.classList.add('list-item__container')
  todoEl.appendChild(containerEl)

  // Setup the remove button
  removeButton.textContent = 'remove'
  removeButton.classList.add('button', 'button--text')
  todoEl.appendChild(removeButton)
  removeButton.addEventListener('click', () => {
    removeTodo(todo.id)
    renderTodos()
  })

  return todoEl
}

const generateSummaryDOM = (incompleteTodos) => {
  const summary = document.createElement('h2')
  summary.classList.add('list-title')
  const plural = incompleteTodos.length === 1 ? '' : 's'
  summary.textContent = `You have ${incompleteTodos.length} todo${plural} left.`
  return summary
}

export { renderTodos }
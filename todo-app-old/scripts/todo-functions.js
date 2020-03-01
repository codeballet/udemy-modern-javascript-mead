'use strict'

// Fetch existing todos from localStorage
const getSavedTodos = () => {
  const todosJSON = localStorage.getItem('todos')

  try {
    return todosJSON ? JSON.parse(todosJSON) : []
  } catch (e) {
    return []
  }
}

// Save todos to localStorage
const saveTodos = (todos) => {
  localStorage.setItem('todos', JSON.stringify(todos))
}

// Remove Todo by id
const removeTodo = (id) => {
  const todoIndex = todos.findIndex((todo) => todo.id == id)

  if (todoIndex > -1) {
    todos.splice(todoIndex, 1)
  }
}

// Toggle the completed value for todo checkbox
const toggleTodo = (id) => {
  const todo = todos.find((todo) => todo.id == id)

  if (todo) {
    todo.completed = !todo.completed
  }
}

// Render appliation todos based on filters
const renderTodos = (todos, filters) => {
  const todosEl = document.querySelector('#todos')
  const filteredTodos = todos.filter((todo) => {
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

// Get the DOM elements for an individual todo
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
    saveTodos(todos)
    renderTodos(todos, filters)
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
    saveTodos(todos)
    renderTodos(todos, filters)
  })

  return todoEl
}

// Get the DOM elements for list summary
const generateSummaryDOM = (incompleteTodos) => {
  const summary = document.createElement('h2')
  summary.classList.add('list-title')
  const plural = incompleteTodos.length === 1 ? '' : 's'
  summary.textContent = `You have ${incompleteTodos.length} todo${plural} left.`
  return summary
}
import { initializeEditPage, generateLastEdited } from './views'
import { updateNote, removeNote } from './notes'

const titleElement = document.querySelector('#note-title')
const bodyElement = document.querySelector('#note-body')
const dateElement = document.querySelector('#last-edited')
const removeElement = document.querySelector('#remove-note')
const noteId = location.hash.substring(1)

initializeEditPage(noteId)

// Setup input and update for note title, save notes array
titleElement.addEventListener('input', (e) => {
  const note = updateNote(noteId, {
    title: e.target.value
  })
  dateElement.textContent = generateLastEdited(note.updatedAt)
})

// Setup input and update for note body, save notes array
bodyElement.addEventListener('input', (e) => {
  const note = updateNote(noteId, {
    body: e.target.value
  })
  dateElement.textContent = generateLastEdited(note.updatedAt)
})

// Setup remove-note button and redirect to index page
removeElement.addEventListener('click', () => {
  removeNote(noteId)
  location.assign('/index.html')
})

// Update other open windows when storage changes
window.addEventListener('storage', (e) => {
  if (e.key === 'notes') {
    initializeEditPage(noteId)
  }
})
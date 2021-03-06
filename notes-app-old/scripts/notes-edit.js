'use strict'

const titleElement = document.querySelector('#note-title')
const bodyElement = document.querySelector('#note-body')
const dateElement = document.querySelector('#last-edited')
const removeElement = document.querySelector('#remove-note')
const noteId = location.hash.substring(1)
let notes = getSavedNotes()
let note = notes.find((note) => note.id == noteId)

if (!note) {
  location.assign('/index.html')
}

// Populate edit page with existing note values
titleElement.value = note.title
bodyElement.value = note.body
dateElement.textContent = generateLastEdited(note.updatedAt)

// Setup input and update for note title, save notes array
titleElement.addEventListener('input', (e) => {
  note.title = e.target.value
  note.updatedAt = moment().valueOf()
  dateElement.textContent = generateLastEdited(note.updatedAt)
  saveNotes(notes)
})

// Setup input and update for note body, save notes array
bodyElement.addEventListener('input', (e) => {
  note.body = e.target.value
  note.updatedAt = moment().valueOf()
  dateElement.textContent = generateLastEdited(note.updatedAt)
  saveNotes(notes)
})

// Setup remove-note button and redirect to index page
removeElement.addEventListener('click', () => {
  removeNote(noteId)
  saveNotes(notes)
  location.assign('/index.html')
})

// Update other open windows when storage changes
window.addEventListener('storage', (e) => {
  if (e.key === 'notes') {
    notes = JSON.parse(e.newValue)
    let note = notes.find((note) => note.id == noteId)
    
    if (!note) {
      location.assign('/index.html')
    }
    
    // Populate edit page with existing note values
    titleElement.value = note.title
    bodyElement.value = note.body
    dateElement.textContent = generateLastEdited(note.updatedAt)
  }
})
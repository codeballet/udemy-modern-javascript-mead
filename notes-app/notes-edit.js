const titleElement = document.querySelector('#note-title')
const bodyElement = document.querySelector('#note-body')
const removeElement = document.querySelector('#remove-note')
const noteId = location.hash.substring(1)
const notes = getSavedNotes()
const note = notes.find(function (note) {
  return note.id == noteId
})

if (note === undefined) {
  location.assign('/index.html')
}

// Populate edit page with existing note values
titleElement.value = note.title
bodyElement.value = note.body

// Setup input and update for note title, save notes array
titleElement.addEventListener('input', function (e) {
  note.title = e.target.value
  saveNotes(notes)
})

// Setup input and update for note body, save notes array
bodyElement.addEventListener('input', function (e) {
  note.body = e.target.value
  saveNotes(notes)
})

// Setup remove-note button and redirect to index page
removeElement.addEventListener('click', function () {
  removeNote(noteId)
  saveNotes(notes)
  location.assign('/index.html')
})
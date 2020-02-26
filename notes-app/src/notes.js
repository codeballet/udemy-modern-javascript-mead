import 'core-js/stable'
import 'regenerator-runtime/runtime'
import { v4 as uuidv4 } from 'uuid'
import moment from 'moment'

let notes = []

// Read existing notes from localStorage
const loadNotes = () => {
  const notesJSON = localStorage.getItem('notes')

  try {
    return notesJSON ? JSON.parse(notesJSON) : []
  } catch (e) {
    return []
  }
}

const saveNotes = () => {
  localStorage.setItem('notes', JSON.stringify(notes))
}

// Expose notes from module
const getNotes = () => notes

const createNote = () => {
  const id = uuidv4()
  const timestamp = moment().valueOf()
  notes.push({
    id: id,
    createdAt: timestamp,
    updatedAt: timestamp,
    title: '',
    body: ''
  })
  saveNotes()
}

notes = loadNotes()

export { getNotes, createNote }
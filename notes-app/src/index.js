import 'core-js/stable'
import 'regenerator-runtime/runtime'
import { getNotes, createNote } from './notes'

console.log(getNotes())
createNote()
console.log(getNotes())
import 'core-js/stable'
import 'regenerator-runtime/runtime'
import { getNotes, createNote, removeNote, updateNote } from './notes'
import { getFilters, setFilters } from './filters'

// console.log(getNotes())
// createNote()
// removeNote('')

// updateNote('32a67846-53e4-4325-9561-ff96d5aa1e2e', {
//   title: 'My note title',
//   body: 'The body for my note.'
// })
// console.log(getNotes())

console.log(getFilters())
setFilters({
  searchText: 'Office',
  sortBy: 'byCreated'
})
console.log(getFilters())
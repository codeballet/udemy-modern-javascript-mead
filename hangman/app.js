const puzzleEl = document.querySelector('#puzzle')
const statusMessageEl = document.querySelector('#status-message')
const game1 = new Hangman('car parts', 2)

puzzleEl.textContent = game1.puzzle
statusMessageEl.textContent = game1.statusMessage

window.addEventListener('keypress', (e) => {
  const guess = String.fromCharCode(e.charCode)
  game1.makeGuess(guess)
  puzzleEl.textContent = game1.puzzle
  statusMessageEl.textContent = game1.statusMessage
})

getPuzzle('4', (error, puzzle) => {
  if (error) {
    console.log(`Error: ${error}`)
  } else {
    console.log(puzzle)
  }
})


const countryCode = 'SE'

getCountry(countryCode, (error, country) => {
  if (error) {
    console.log(error)
  } else {
    console.log(`Country name: ${country}`)
  }
})
const puzzleEl = document.querySelector('#puzzle')
const statusMessageEl = document.querySelector('#status-message')
const game1 = new Hangman('car parts', 2)

puzzleEl.textContent = game1.puzzle
statusMessageEl.textContent = game1.statusMessage

window.addEventListener('keypress', function (e) {
  const guess = String.fromCharCode(e.charCode)
  game1.makeGuess(guess)
  puzzleEl.textContent = game1.puzzle
  statusMessageEl.textContent = game1.statusMessage
})
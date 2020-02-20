const Hangman = function (word, remainingGuesses) {
  this.word = word.toLowerCase().split('')
  this.remainingGuesses = remainingGuesses
  this.guessedLetters = ['c', 'e']
}

Hangman.prototype.getPuzzle = function () {
  let puzzle = ''

  this.word.forEach((letter) => {
    this.guessedLetters.includes(letter) || letter === ' ' ? puzzle += letter : puzzle += '*'
  })

  return puzzle
}

const game1 = new Hangman('cat', 2)
console.log(game1.getPuzzle())

const game2 = new Hangman('My name', 3)
console.log(game2.getPuzzle())
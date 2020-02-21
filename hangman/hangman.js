const Hangman = function (word, remainingGuesses) {
  this.word = word.toLowerCase().split('')
  this.remainingGuesses = remainingGuesses
  this.guessedLetters = []
  this.status = 'playing'
}

Hangman.prototype.setStatus = function () {
  const finished = this.word.every((letter) => this.guessedLetters.includes(letter))

  if (this.remainingGuesses === 0) {
    this.status = 'failed'
  } else if (finished) {
    this.status = 'finished'
  } else {
    this.status = 'playing'
  }

  // My own solution, also works
  // puzzle = this.getPuzzle()

  // if (puzzle === this.word.join('')) {
  //   this.status = 'finished'
  // }

  // if (this.remainingGuesses === 0) {
  //   this.status = 'failed'
  // }
}

Hangman.prototype.getPuzzle = function () {
  let puzzle = ''

  this.word.forEach((letter) => {
    this.guessedLetters.includes(letter) || letter === ' ' ? puzzle += letter : puzzle += '*'
  })

  return puzzle
}

Hangman.prototype.makeGuess = function (guess) {
  guess = guess.toLowerCase()
  const isUnique = !this.guessedLetters.includes(guess)
  const isBadGuess = !this.word.includes(guess)
  
  if (isUnique) {
    this.guessedLetters.push(guess)
  }

  if (isUnique && isBadGuess) {
    this.remainingGuesses--
  }
   this.setStatus()
}

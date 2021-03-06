// Multiple arguments

let add = function (a, b, c) {
  return a + b + c
}

let result = add(10, 1, 5)
console.log(result)


// Default arguments

let getScoreText = function (name = 'Anonymous', score = 0) {
  return `Name: ${name} - Score: ${score}`
}

let scoreText = getScoreText(undefined, 99)

console.log(scoreText)


// Challenge area

// Tip calculator
// total, tip .2
// Return: A 25% tip on $40 would be $10

let getTip = function (total, tip = .2) {
  let tipPercent = tip * 100
  let tipPay = tip * total
  return `A ${tipPercent}% tip on $${total} would be $${tipPay}`
}

let tipSummary = getTip(60)
console.log(tipSummary)
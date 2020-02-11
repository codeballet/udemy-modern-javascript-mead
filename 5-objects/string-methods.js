let name = '  Johan Stjernholm  '

// Length property
console.log(name.length)

// Convert to upper case method
console.log(name.toUpperCase())

// Convert to lower case method
console.log(name.toLowerCase())

// Includes method
let password = 'abc123password098'
console.log(password.includes('password'))

// Trim method
console.log(name.trim())


// Challenge area

// isValidPassword
let isValidPassword = function (word) {
  return word.length > 8 && !word.includes('password')
}
// length is more than 8 - and it does not contain the word password

console.log(isValidPassword('asdfp'))
console.log(isValidPassword('dfje8uwr90eq8rujgfvd'))
console.log(isValidPassword('asdfppassword'))
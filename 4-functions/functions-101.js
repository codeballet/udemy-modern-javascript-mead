// Function - input (argument), code, output (return value)

let greetUser = function () {
  console.log('Welcome user')
}

greetUser()

let square = function (num) {
  let result = num * num
  return result
}

let value = square(3)
let otherValue = square(10)
console.log(value)
console.log(otherValue)


// Challenge area

// convertFahrenheitToCelsius
let convertFahrenheitToCelsius = function (fahrenheit) {
  let celsius = (fahrenheit - 32) * 5 / 9
  return celsius
}
// Call a couple of times (32 -> 0) (68 -> 20)
let celsius1 = convertFahrenheitToCelsius(32)
let celsius2 = convertFahrenheitToCelsius(68)
// Print the converted values
console.log(celsius1)
console.log(celsius2)

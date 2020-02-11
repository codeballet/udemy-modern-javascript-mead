let myBook = {
  title: '1984',
  author: 'George Orwell',
  pageCount: 326
}

let otherBook = {
  title: 'A Peoples History',
  author: 'Howard Zinn',
  pageCount: 723
}

let getSummary = function (book) {
  return {
    summary:`${book.title} by ${book.author}`,
    pageCountSummary: `${book.title} is ${book.pageCount} pages long`
  }
}

let bookSummary = getSummary(myBook)
let otherBookSummary = getSummary(otherBook)

console.log(bookSummary.pageCountSummary)


// Challenge area
// Create function - take fahrenheit in - return object with all three
// let celcius = (fahrenheit - 32) *5 / 9
// let kelvin = (fahrenheit + 459.67) *5 / 9

let convertFahrenheit = function (fahrenheit) {
  return {
    fahrenheit: fahrenheit,
    celsius: (fahrenheit - 32) *5 / 9,
    kelvin: (fahrenheit + 459.67) *5 / 9
  }
}

let temps = convertFahrenheit(74)

console.log(temps)

// product --> Object.prototype --> null

const product = new Object({
  name: 'The War of Art'
})

Object.prototype.someNewMethod = () => 'This is new function'

// hasOwnProperty
console.log(product.someNewMethod('hasOwnProperty')) // false
console.log(product)
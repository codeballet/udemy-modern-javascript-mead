let temp = 55

// Logical And Operator - True if both sides are true. False otherwise
// Logical Or Operator - True if at least one side is true. False otherwise

if (temp >= 60 && temp <= 90) {
  console.log('It is pretty nice outside.')
} else if (temp <= 0 || temp >= 120) {
  console.log('Do not go outside!')
} else {
  console.log('Eh, do what you want')
}


// Challenge area

let isGuestOneVegan = false
let isGuestTwoVegan = false

// Are both vegan? Only offer up vegan dishes
// At least one guest is vegan? Make sure to offer up some vegan options.
// Else, offer up anyting on the menu

if (isGuestOneVegan && isGuestTwoVegan) {
  console.log('Only offer up vegan dishes')
} else if (isGuestOneVegan || isGuestTwoVegan) {
  console.log('Make sure to offer some vegan dishes')
} else {
  console.log('Offer anything on the menu')
}
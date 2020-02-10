let isAccountLocked = false
let userRole = 'user'

if (isAccountLocked) {
  console.log('Is account locked')
} else if (userRole === 'admin') {
  console.log('Welcome admin!')
} else {
  console.log('Welcome!')
}


// Challenge area

let temp = 130

if (temp < 31) {
  // temp 31, It's freezing outside!
  console.log("It's freezing outside")
} else if (temp > 119) {
  // temp 120, It's hot outside!
  console.log("It's hot outside")
} else {
  //Go for it. It is pretty nice.
  console.log("Go for it, It is pretty nice.")
}

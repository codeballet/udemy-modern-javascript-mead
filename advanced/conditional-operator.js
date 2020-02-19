// const myAge = 7
// const message = myAge >= 18 ? 'You can vote' : 'You cannot vote'

// if (myAge >= 18) {
//   message = 'You can vote'
// } else {
//   message = 'You cannot vote'
// }

// console.log(message)

const myAge = 20
const showPage = () => {
  return 'Showing the page'
}

const showErrorPage = () => {
  return 'Showing the error page'
}

const message = myAge >= 21 ? showPage() : showErrorPage()
console.log(message)


const team = ['Tyler', 'Porter', 'Sven']
console.log(team.length <= 4 ? `Team size: ${team.length}` : 'Too many people on your team')

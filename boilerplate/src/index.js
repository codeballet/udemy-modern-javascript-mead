import 'core-js/stable'
import 'regenerator-runtime/runtime'

// const calculateAverage = (thing, ...numbers) => {
//   let sum = 0
//   numbers.forEach((num) => sum += num)
//   const average = sum / numbers.length
//   return `The average ${thing} is ${average}`
// }

// console.log(calculateAverage('age', 0, 100, 88, 64))

const printTeam = (team, coach, ...players) => {
  console.log(`Team: ${team}`)
  console.log(`Coach: ${coach}`)
  console.log(`Players: ${players.join(', ')}`)
}

const team = {
  name: 'Liberty',
  coach: 'Casey Penn',
  players: ['Marge', 'Aiden', 'Herbert', 'Sherry']
}

printTeam(team.name, team.coach, ...team.players)


let cities = ['Barcelone', 'Cape Town', 'Bordeuax']
cities = ['Stockholm', ...cities]

console.log(cities)
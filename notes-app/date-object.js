
// Unix Epoch - January 1st 1970 00:00:00

// const now = new Date()
// const timestamp = now.getTime()

// const myDate = new Date(timestamp)
// console.log(myDate.getFullYear())

// console.log(`Year: ${now.getFullYear()}`)
// console.log(`Month: ${now.getMonth()}`)
// console.log(`Day of month: ${now.getDate()}`)
// console.log(`Hour: ${now.getHours()}`)
// console.log(`Minute: ${now.getMinutes()}`)
// console.log(`Second: ${now.getSeconds()}`)

const date1 = new Date('December 9 2001 07:20:00')
const date2 = new Date('March 19 1986 02:50:00')

timestamp1 = date1.getTime()
timestamp2 = date2.getTime()

if (timestamp1 < timestamp2) {
  console.log(date1.toString())
} else {
  console.log(date2.toString())
}

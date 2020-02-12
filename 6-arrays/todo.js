const todos = [
  'Learn JavaScript', 
  'Let the dogs out', 
  'Write the dance syllabus',
  'Check the Taobao deliveries',
  'Talk to Gary'
]

todos.splice(2, 1)
todos.push('This is the last thing to do')
todos.shift()

console.log(`You have ${todos.length} todos`)
console.log(todos)

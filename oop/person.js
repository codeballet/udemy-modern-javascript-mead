// Prototypal inheritance
// myPerson --> Person.prototype --> Object.prototype --> null

class Person {
  constructor(firstName, lastName, age, likes = []) {
    this.firstName = firstName
    this.lastName = lastName
    this.age = age
    this.likes = likes
  }

  getBio() {
    let bio = `${this.firstName} is ${this.age}.`

    this.likes.forEach((like) => {
      bio += ` ${this.firstName} likes ${like}.`
    })
  
    return bio
  }

  setName(fullName) {
    const names = fullName.split(' ')
    this.firstName = names[0]
    this.lastName = names[1]
  }
}


class Employee extends Person {
  constructor(firstName, lastName, age, position, likes) {
    super(firstName, lastName, age, likes)
    this.position = position
  }

  getBio() {
    return `${this.firstName} ${this.lastName} is a ${this.position}.`
  }

  getYearsLeft() {
    return 65 - this.age
  }
}


class Student extends Person {
  constructor(firstName, lastName, age, grade, likes) {
    super(firstName, lastName, age, likes)
    this.grade = grade
  }

  getBio() {
    const status = this.grade >= 70 ? 'passing' : 'failing'
    return `${this.firstName} is ${status} the class.`
  }

  updateGrade(change) {
    this.grade += change
  }
}


const anne = new Student('Anne', 'Lindt', 18, 73)
console.log(anne.getBio())
anne.updateGrade(-10)
console.log(anne.getBio())

// const me = new Employee('Andrew', 'Mead', 27, 'Teacher', ['Teaching', 'Biking'])
// me.setName('Alexis Turner')
// console.log(me.getBio())
// console.log(me.getYearsLeft())

// const person2 = new Person('Johan', 'Stjernholm', 42)
// console.log(person2.getBio())
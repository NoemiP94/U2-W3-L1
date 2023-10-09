class User {
  constructor(_firstName, _lastName, _age, _location) {
    this.firstName = _firstName
    this.lastName = _lastName
    this.age = _age
    this.location = _location
  }
}

const person1 = new User('Mario', 'Rossi', 50, 'Roma')
const person2 = new User('Luigi', 'Bianchi', 37, 'Milano')

const compare = function (user1, user2) {
  if (user1.age < user2.age) {
    return `${user1.firstName} è più piccolo di ${user2.firstName}`
  } else if (user1.age > user2.age) {
    return `${user1.firstName} è più grande di ${user2.firstName}`
  } else {
    return `${user1.firstName} ha la stessa età di ${user2.firstName}`
  }
}

console.log(compare(person1, person2))

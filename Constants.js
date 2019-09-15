/**
 * Constants
 * Description: A very common and useful feature
 * present in almost all the mainstream languages.
 * The Const keyword allows you to declare immutable
 * variables in JS.
 */

// example 1: with the primitive types
const registrationNumber = 129837

// it will raise an exception
try {
  registrationNumber = 324567
} catch (err) {
  console.log('Error Message: ' + err)
}

// example 2: let's try to reassign a string
const myConstantString = 'Javascript is <3'

// it will raise an exception
try {
  myConstantString = 'Javascript is not <3'
} catch (err) {
  console.log('Error Message: ' + err)
}

// example 3: there's one caveat to constants: they can't be reassigned but the arrays/objects they contain can be changed
var aboutMe = {
  name: 'Mubbashir',
  job: 'Software Engineer'
}

aboutMe.name = 'Mubbashir Mustafa' // arrays & objects values can be changed
aboutMe.country = 'PK' // this is absolutely valid
console.log(aboutMe) // { name: 'Mubbashir Mustafa', job: 'Software Engineer', country: 'PK' }

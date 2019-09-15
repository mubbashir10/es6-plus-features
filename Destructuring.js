/**
 * Destructuring
 * Description: Destructuring allows to extract values from
 * Objects & Arrays
 */

// consider an object that contains my basic info
const aboutMe = {
  firstName: 'Mubbashir',
  lastName: 'Mustafa',
  country: 'PK',
  job: 'Software Engineer'

}

// example 1: I extract only my country from the object
const { country } = aboutMe
console.log(`${country}`) // PK

// example 2: same can be done when an object/array is passed as param
const printNameAndJob = (aboutMe) => {
  const { firstName, job } = aboutMe // you can extract the required values by entering in their keys
  console.log(`${firstName} is a ${job}`)
}
printNameAndJob(aboutMe) // Mubbashir is a Software Engineer

// example 3: with alias of keys
const { firstName: fname, lastName: ln } = aboutMe // you can use alias of original keys as well
console.log(`Hello from ${fname} ${ln}!!`) // Hello from Mubbashir Mustafa!!

// example 4: with default values
const {firstName, lastName = 'MM', nick = 'Super Mike'} = aboutMe // nick is not in the original object so it's default value will be used, but last name is in the original object
console.log(`At work people call me ${nick}, although my name is ${firstName} ${lastName}`) // Hello from Mubbashir Mustafa!!

// example 4: with arrays (similar)
const fruits = ['Appless', 'Bananas', 'Mangoes']
const [a, b] = fruits
console.log(`${a} are better than ${b} imo!`)

// example 5: you can skip entries too
const [, , c] = fruits
console.log(`Oh main! I totally forgot about ${c} :D`)

/**
 * Object Literals
 * Description: Object literals
 * Objects & Arrays and assign them to individual variables
 */

// using object literalss
const myInfoUsingObjectLiterals = (name, job, country, nick) => {
  const info = { name, job, country, nick } // we are not writing key values, only assigning values and it will build keys automatically from the param names
  return info
}
console.log(myInfoUsingObjectLiterals('Mubbashir', 'Software Engineer', 'PK', 'Little Hulk'))

// without object literals
const myInfoWithoutObjectLiterals = (name, job, country, nick) => {
  const info = { name: name, job: job, country: country, nick: nick }
  return info
}
console.log(myInfoWithoutObjectLiterals('Mubbashir', 'Software Engineer', 'PK', 'Little Hulk'))

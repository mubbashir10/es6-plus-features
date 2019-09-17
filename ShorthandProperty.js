/**
 * Shorthand Property
 */

const first = 'john'
const last = 'doe'

name = { first, last }

console.log(`Fullname is: ${name.first} ${name.last}`)

// prior to ECMAScript2015
nameOld = { first: first, last: last }
console.log(`Fullname is: ${nameOld.first} ${nameOld.last}`)

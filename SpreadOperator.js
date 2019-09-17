/**
 * Spread Operator
 */

const oldNames = ['john', 'johna', 'joey']
const newNames = ['jeff', 'jack', ...oldNames]

// it should contain both of the names
console.log(newNames)

// if we don't use spread operator, then it will become array within array
const confusingNames = ['jeff', 'jack', oldNames]
console.log(confusingNames)

// spread operator works on iterable collection (which means strings too)
const str = 'hello'
const chars = [...str]
console.log(chars)

/**
 * Default Parameter Values
 */

const sum = (x, y = 0) => {
  return x + y
}

console.log('when x=1 & y is not specified, the answer is ' + sum(1))
console.log('when x=1 & y=2, the answer is equal to ' + sum(1, 2))

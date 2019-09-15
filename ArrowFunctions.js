/**
 * Arrow Functions
 * Description: Arrow functions are syntactic sugar
 * and help you to write clean and concise code for
 * your function. It changes the way functions are
 * declared in JS.
 */

// example 1: without params (notice that we are not using the keyword 'function')
const es6FunctionWithNoParam = () => { return 'returned from arrow function' }

const oldSyntaxFunction = function () { return 'returned from old syntax function' }

console.log(es6FunctionWithNoParam() + '\n' + oldSyntaxFunction())

// example 2: with single param (for one param you don't need to put paranthesis)
const es6FunctionWithOneParam = a => { return a + ' returned from arrow function with 1 param' }

const oldSyntaxFunctionWithOneParam = function (a) { return a + ' returned from old syntax function with 1 param' }

console.log(es6FunctionWithOneParam('hi,') + '\n' + oldSyntaxFunctionWithOneParam('hi,'))

// example 3: with multiple parameters
const es6FunctionWithMultipleParam = (a, b, c) => { return a + ' returned from arrow function with many params' }

const oldSyntaxFunctionWithMultipleParam = function (a, b, c) { return a + ' returned from old syntax function with many params' }

console.log(es6FunctionWithMultipleParam('hi, hello, hey') + '\n' + oldSyntaxFunctionWithMultipleParam('hi, hello, hey'))

// example 4: with single statement (if you only need to execute a single statement in the function's body then no need for braces)
const es6FunctionWithOneParamAndSingleStatement = a => a * a
const es6FunctionWithMultipleParamAndSingleStatement = (a, b) => a * b

console.log(es6FunctionWithOneParamAndSingleStatement(2)) // should return 4
console.log(es6FunctionWithMultipleParamAndSingleStatement(2, 3)) // should return 6

// example 5: callbacks

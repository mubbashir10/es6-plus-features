/**
 * Rest Parameter Handling
 */

// rest parameters agregate remaining parameters into single parameter
function foo (x, y, ...z) {
  return x + y + z.length
}
console.log(foo(1, 2, 'this one', 'this one too', 'and this one will be accomadated by the rest paramater as a single parameter'))

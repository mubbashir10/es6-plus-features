/**
 * Scopes
 */

// scoped variables
// var is function scoped
// let and constants are block scoped
function variableScopeChecker () {
  {
    var globalVariable = 'Í am a global variable'
    const scopedVariable = 'i am a scoped variable'
    const scopedConstant = 'i am a scopped constant'
  }
  console.log(globalVariable)
  try {
    console.log(scopedVariable)
    console.log(scopedConstant)
  } catch (error) {
    console.log('let and constants are block scoped, not function scoped so an exception is raised')
  }
}

variableScopeChecker()

// scoped functions
{
  function foo () {
    return 'foo from function foo'
  }
  console.log(foo())
  {
    function foo () {
      return 'bar from function foo, inside function foo'
    }
    console.log(foo())
  }
  console.log(foo())
}

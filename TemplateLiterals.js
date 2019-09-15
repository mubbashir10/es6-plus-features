/**
 * Template Literals
 * Description: Use backticks instead
 * of quotes and allows you to interpolate
 * strings and use multilines.
 */

// example 1: single line with multiple variables
const about = {
  first_name: 'Mubbashir',
  last_name: 'Mustafa'
}
let greetings = `Hello Peeps! I am ${about.first_name} ${about.last_name}` // no need to use + concatenate variables & string
console.log(greetings)

// example 2: multi line (notice that no new line or tab chracter is used)
greetings = `${about.first_name}
    loves 
to
        do
    coding
in JS`
console.log(greetings)

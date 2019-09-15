/**
 * Binary & Octal Literals
 * Description: Before ES6 we were limited to write
 * decimal and hexadecimal (using 0x) numbers. ES6
 * allows us to write binary (base2) & octal(base8)
 * numbers as well.
 */

const binaryNumber = 0b111110111 // place '0b' before a literal to make it binary
const octalNumber = 0o767 // place '0o' before a literal to make it octal
const hexaDecimalNumber = 0x1F7 // place '0x' before a literal to make it hexadecimal
const decimalNumber = 503 // decimal literals are written as it is

console.log(decimalNumber === binaryNumber && decimalNumber === octalNumber && decimalNumber === hexaDecimalNumber) // should print true, since all the numbers are same i.e 503

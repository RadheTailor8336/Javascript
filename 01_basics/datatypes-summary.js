/* kis tarah se data ko memory mein rakha jata hain or acces kiya jata hain 
   us basis pr data ka 2 catagrization hain - primitive and non primitive
*/

// Primitive

// 7 types : String, Number, Boolean, null, undefined, Symbol(value  ko unique bnane ke liye use)
// BigInt

const score = 100
const scoreValue = 100.3

const isLoggenIn = false
const outsiedeTemp = null;
let userEmail; //undefined

const id = Symbol('123')
const anotherId= Symbol('123')

console.log(id  ==  anotherId)



// Reference(Non Primitive)

// Array, Objects, Functions
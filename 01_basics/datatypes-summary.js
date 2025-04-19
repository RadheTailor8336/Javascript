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

//console.log(id  ==  anotherId)


const bigNUmber = 3455677787n

// Reference(Non Primitive)

// Array, Objects, Functions

const heros = ["shaktiman", "naagraj","doga"] //Array

/* Object */
let myObj ={ 
   name: "radhe",
   age: 22,
}
   
// function
const myFunction= function(){
   console.log("Hello world");
}

console.log(typeof bigNUmber);

//JavaScript is a dynamically typed language, which means you don't need to explicitly specify the data type of a variable when declaring it. 
 
  //typeof => return data type
  /*
  Return type of variables in JavaScript
 1) Primitive Datatypes
        Number => number
        String  => string
        Boolean  => boolean
        null  => object
        undefined  =>  undefined
        Symbol  =>  symbol
        BigInt  =>  bigint
 
 2) Non-primitive Datatypes
        Arrays  =>  object
        Function  =>  function
        Object  =>  object
  */

      //+++++++++++++++++++++++++++++++++++++++++
   // Stack (Primitive)-copy value milta hai, Heap(Non- Primitive)-reference milta hai

let myYoutubename= "radhetailor123.com"

let anothername = myYoutubename
anothername = "chai or code"

console.log(myYoutubename);
console.log(anothername);

//Heap: Non primitive - reference is used, since refrence is used changes will reflect in original also. (When you take refrence back from heap , you dont get a copy, you get refrence of original value)
let userOne ={
   email: "user@google.com",
   upi: "user@ybl"
}

let userTwo = userOne

userTwo.email ="hitesh@google.com"

console.log(userOne.email);
console.log(userTwo.email);
//here we made change in userTwo but it will reflect in userOne as well.
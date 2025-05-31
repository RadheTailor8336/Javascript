const score =400
//console.log(score);

const balance = new Number(100)
//console.log(balance);

//console.log(balance.toString().length); //convert number into string and count lengh of string , print it - 3(length)
//console.log(balance.toFixed(1));// print the decimal value according to input =100.0,here (1) is the presicion value

const otherNUmber = 123.8966

//console.log(otherNUmber.toPrecision(4))


const hundreds = 1000000
//console.log(hundreds.toLocaleString('en-IN'));//Format a number into a string, using the locale specific of india, output-10,00,000


//++++++ Maths +++++++++++++++++++++

// console.log(Math);
// console.log(Math.abs(-4));// absolute value leta hai output = 4
// console.log(Math.round(4.6));// roundof value leta hai output =5
// console.log(Math.ceil(4.2));// top value choose krta hai output=5
// console.log(Math.floor(4.9));// always take lowest value , decimal value nahi leta output =4
// console.log(Math.sqrt(25)); //square root krta hai output =5
// console.log(Math.min(4,3,6,8)); // minimum value print karta hai = 3
// console.log(Math.max(4,3,6,8)); // maximum value print krta hai = 8

console.log(Math.random()); // random value generate krta hai betwen 0 and 1
console.log(Math.floor(Math.random()*10) +1);


const min = 10
const max = 20

console.log(Math.floor(Math.random() * (max - min + 1)) + min)

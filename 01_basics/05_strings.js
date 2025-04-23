const name ="hitesh"
const repoCount = 50

//console.log(name + repoCount + "Value");

// console.log(`HEllo my name is ${name} and my repo count  is ${repoCount}`)

 const gameName = new String('hitesh-hc')

// console.log(gameName[0]);
// console.log(gameName.__proto__);

// console.log(gameName.length);
// console.log(gameName.toUpperCase());
 console.log(gameName.charAt(2));
 console.log(gameName.indexOf('t'));

const newString = gameName.substring(0,4)
console.log(newString);

const anotherString = gameName.slice(-8,4);//string length 9-8 so(1,4)
console.log(anotherString);

const newStringOne = "    hitesh   "
console.log(newStringOne);
console.log(newStringOne.trim()); // remove the spaces from starting and ending


const url ="https://hitesh.com/hiesh%20choudhary"

console.log(url.replace('%','-'));


console.log(url.includes('hitesh'));//check the keyword is availabe or not in string

console.log(gameName.split('-'))//split the string and store in array
// Dates 
// JavaScript Date objects represent a single moment in time in a platform-independent format. Date objects encapsulate an integral number that represents milliseconds since the midnight at the beginning of January 1, 1970, UTC (the epoch).

let myDate = new Date()
// console.log(myDate.toString());
// console.log(myDate.toDateString());
// console.log(myDate.toLocaleString());
// console.log(typeof myDate); // Date is a object in javascript

//let myCreatedDate = new Date(2023,0,23);// In javascript,months are starts from 0 so here (2023,0,23) 0 is January.
//console.log(myCreatedDate.toDateString()); // output = Mon Jan 23 2023
let myCreatedDate= new Date(2023,0,23,5,3);
console.log(myCreatedDate.toLocaleString()); //output= 1/23/2023, 5:03:00 AM
hello


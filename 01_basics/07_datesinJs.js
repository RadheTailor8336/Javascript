// Dates 
// JavaScript Date objects represent a single moment in time in a platform-independent format. Date objects encapsulate an integral number that represents milliseconds since the midnight at the beginning of January 1, 1970, UTC (the epoch).

let myDate = new Date()
// console.log(myDate.toString());
// console.log(myDate.toDateString());
// console.log(myDate.toLocaleString());
// console.log(typeof myDate); // Date is a object in javascript

//let myCreatedDate = new Date(2023,0,23);// In javascript,months are starts from 0 so here (2023,0,23) 0 is January.
//console.log(myCreatedDate.toDateString()); // output = Mon Jan 23 2023
//let myCreatedDate= new Date(2023,0,23,5,3);
//console.log(myCreatedDate.toLocaleString()); //date or time btata hai,output= 1/23/2023, 5:03:00 AM

let myCreatedDate= new Date("01-14-2023"); // output =1/14/2023, 12:00:00 AM
//console.log(myCreatedDate.toLocaleString());

let myTimeStamp = Date.now() // timestamp 

// console.log(myTimeStamp);
// console.log(myCreatedDate.getTime());
// console.log(Math.floor(Date.now()/1000));

let newDate = new Date()
console.log(newDate);
console.log(newDate.getMonth()+1); // currrent  month btata hai jo ki 0 se start hote hain isliye +1
console.log(newDate.getDay()); // current day
console.log(newDate.getDate()); // current date
console.log(newDate.getFullYear()); // current year

//`${newDate.getDay()} and the time`

newDate.toLocaleString('default',{
    weekday: "long",
})

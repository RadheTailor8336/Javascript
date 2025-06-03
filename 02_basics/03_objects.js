//singleton 
//Object.create


/**   -------Objects----------
 * 
 * In JavaScript, an object is a collection of key-value pairs used to store and organize data. 
 * Keys are strings (or Symbols), and values can be of any data type,
 *  including functions, which makes objects ideal for representing real-world entities.
 * 
 * Example:
javascript
Copy code
const user = {
  name: "Radhe",
  age: 21,
  greet: function() {
    console.log("Hello!");
  }
};
 * 
 * 
 * 
 * 
 */




//object literals

const mySym = Symbol("key1") // Symbol datatype

const Jsuser ={
    name : "Radhe",
    "full name": "Radhe Tailor ",
    [mySym]: "mykey1",
    age  : 18,
    location : "Jaipur",
    email : "radhe@gmail.com",
    isLoggedIn : false,
    lastLoginDays: ["Monday", "Saturday"]
}

//method to get acces the object
// console.log(Jsuser.email)
// console.log(Jsuser["email"])
// console.log(Jsuser["full name"])
// console.log(Jsuser [mySym])
// console.log(typeof mySym)

Jsuser.email = "radhe@chargpt.com"// objects ki value ko change or override krte hai
//console.log(Jsuser.email)
//Object.freeze(Jsuser) // object mein modification ko freeze kr deta hai
Jsuser.email = "radhe@microsoft.com"
//console.log(Jsuser);

Jsuser.greeting = function(){  //function declaration
    console.log("Hello Js user");
}


Jsuser.greetingTwo = function(){  //function declaration
    console.log(`Hello Js user, ${this.name}`);
}


console.log(Jsuser.greeting());
console.log(Jsuser.greetingTwo());


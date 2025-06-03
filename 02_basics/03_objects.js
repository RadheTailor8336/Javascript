//singleton 
//Object.create




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
console.log(Jsuser.email)
console.log(Jsuser["email"])
console.log(Jsuser["full name"])
console.log(Jsuser [mySym])
console.log(typeof mySym)

Jsuser.email = "radhe@chargpt.com"// objects ki value ko change or override krte hai
console.log(Jsuser.email)
Object.freeze(Jsuser)
Jsuser.email = "radhe@microsoft.com"
console.log(Jsuser)

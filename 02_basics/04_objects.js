//const tinderUser = new Object() // singelton object

const tinderUser = {}

tinderUser.id = "123abc"
tinderUser.name = "Sammy"
tinderUser.isLoggedIn = false

//console.log(tinderUser);

const regularUser = {
    email : "some@gmail.com",
    fullname:{
        userfullname:{
            firstname:"Radhe",
            lastname: "Tailor",
        }
    }
}

//console.log(regularUser.fullname.userfullname.firstname);

const obj1 ={1:"a", 2: "b"}
const obj2 ={3:"a", 4: "b"}
const obj4 ={5:"a", 6: "b"}
//const obj3 = { obj1, obj2 }
//const obj3 = Object.assign({},obj1,obj2) //objects ko merge krta hain

const obj3 ={...obj1,...obj2} // objects ko merge krke ek new obejct return krta hai using spread operator (...)
//console.log(obj3);

const users =[
    {
        id:1,
        email:"h@gmail.com"
    },
    {
        id:1,
        email:"h@gmail.com"
    },
]

users[1].email
console.log(tinderUser);

console.log(Object.keys(tinderUser)); // object ki keys btata hai array ke under, op=[ 'id', 'name', 'isLoggedIn' ]
console.log(Object.values(tinderUser)); // object ke keys ki value btata hai array ke under,op=[ '123abc', 'Sammy', false ]
console.log(Object.entries(tinderUser));// objects ki keys and values dono btata hai in array , op=[ [ 'id', '123abc' ], [ 'name', 'Sammy' ], [ 'isLoggedIn', false ] ] 


console.log(tinderUser.hasOwnProperty('isLoggedIn'));// object ke under koi property exist krti hain ki nahi , gives the output in boolean ,output=true
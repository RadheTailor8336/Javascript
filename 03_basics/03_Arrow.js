const user ={
    username: "hitesh",
    price: 999,

    welcomeMessage: function(){
        console.log(`${this.username} ,welcome to website`)// this ,current context ko refer karta hai
        console.log(this); // it gives current context of object
    }
}


// console.log(user.welcomeMessage());
// user.username= "sam"
// console.log(user.welcomeMessage());

//console.log(this);// it gives empty object

// function chai(){
//     let username = "hitesh"
//     console.log(this.username);//this keyword works only on objects not on functions  , op undefined
// }
// chai()
// *** Note - browser ke under jo global object hain - window object

const chai = ()=>{ // arrow function ()=>
    let uesrname = "hitesh"
    console.log(this.username); //op= undefined

}
//chai()

// const addTwo = (num1, num2)=>{ // Arrow function
//     return num1+num2
// }

//const addTwo = (num1, num2)=> /*return */ num1+num2 // is arrow function mein implicit return kiya hai jisme return likhne ki need nhi hoti agar curley breaces{} na use kre toh

//const addTwo = (num1, num2)=> (num1+num2)
//const addTwo = (num1, num2)=> (num1+num2)
const addTwo = (num1, num2)=> ({username:"hitesh"})// object return kiya,op= { username: 'hitesh' }


console.log(addTwo(3,4));


//An arrow function is a concise ES6 syntax for writing anonymous function expressions using the => (fat arrow) operator.


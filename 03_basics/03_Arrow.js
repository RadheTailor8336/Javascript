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
//     console.log(this.username);//this keyword works only on objects not on functions  
// }
// chai()
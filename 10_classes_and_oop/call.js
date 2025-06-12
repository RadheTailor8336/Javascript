function setUsername(username){
    //complex DB calls
    this.username= username;
    console.log("called");
   
}

function createUser(username,email,password){
    setUsername.call(this,username) // here we use this because setusername mein username access kr sake

    this.email= email;
    this.password= password
}

const chai = new createUser("chai","chai@fb.com")
console.log(chai);

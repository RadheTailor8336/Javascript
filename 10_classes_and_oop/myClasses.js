//ES6

// class User{
//     constructor(username,email,password) {// jaise h class se object initialize hoga , jaise hi new keyword kaam mein lenge constructor apne aap call ho jata hai
//     this.username=username;
//     this.email=email;
//     this.password=password;
//     }
//     encrypyPassword(){
//         return `${this.password}abc`
//     }
//     changeUsername(){
//         return `${this.username.toUpperCase()}`
//     }

// }

// const chai = new User("chai","chai@gmail.com","123")
// console.log(chai.encrypyPassword());
// console.log(chai.changeUsername());

// behind the scene
function User(username, email, password){
    this.username = username;
    this.email = email;
    this.password = password;
}

User.prototype.encrypyPassword = function(){
    return `${this.password}abc`;
}

User.prototype.changeUsername = function(){
    return `${this.username.toUpperCase()}`;
}

const tea = new User("tea", "te@gmail.com", "123");

console.log(tea.encrypyPassword());   // Output: 123abc
console.log(tea.changeUsername());    // Output: TEA

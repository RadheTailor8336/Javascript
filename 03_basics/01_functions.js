


function sayMyName(){
    console.log("R");
    console.log("A");
    console.log("D");
    console.log("H");
    console.log("E");
    console.log("Y");

    
}

//sayMyName() // method to  execute the function 

function addTwoNumbers(number1, number2){ // functon ki defination ke under ki values ko parameter khte hai,here (number1, number2) are parameters
   // console.log(number1 + number2);
 
//   return number1 + number 2
// }

//addTwoNumbers(3,4) // function ko call krte samay jo values pass krte hain unhe arguments kehte hai,here (3,4) are the arguments
}

function loginUserMessage(username="sam"){
    if(!username){
        console.log("Please enter a username");
         return 
    }
    return `${username} just logged in`
}

// console.log(loginUserMessage("Radhe"));
//console.log(loginUserMessage()); // jab function ko call krte hain tab koi argument nahi dete toh ,op =undefined just logged in
//console.log(loginUserMessage("Radhe")); // value override ho jaegi = Radhe just logged in


function calculateCarPrice(...num1){// it is the (...) rest operator, jo multiple values ko ek array mein daal deta hai
    return num1
}
//console.log(calculateCarPrice(200,400,500)); // out put through rest operator ...num1 =[ 200, 400, 500 ]

const user = {
    username: "hitesh",
    price: 199
}

function handleObject(anyObject){ // object ko function me pass kiya
    //console.log(`User name is ${anyObject.username} and price is ${anyObject.price}`);

    
}

//handleObject(user)

handleObject({ // function ke under direct object passing
    username : "sam",
    price :399
})

const myNewArray = [200 ,400, 100 ,600]

function returnSecondValue(getArray){
     return getArray[1]
}
console.log(returnSecondValue([200,400,500,1000]));

/*
### 🔧 JavaScript Function (Definition)

A **function** in JavaScript is a reusable block of code designed to perform a specific task.  
It runs only when it is **called/invoked** and can accept input values called **parameters**, and may return an output.

#### 🔹 Syntax:
```javascript
function functionName(parameter1, parameter2) {
  // code to execute
  return result;
}
  */

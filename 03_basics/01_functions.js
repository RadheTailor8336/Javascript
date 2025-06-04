


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



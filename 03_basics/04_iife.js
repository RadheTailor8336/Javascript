// Immediately Invoked Function Expresstion
// global scope ke declaration ke polution ko htaane ke liye iife use krte hain

(function chai(){ // function ko () ke under wrap krte hai
    //named iife
    console.log(`DB Connected`);


})(); 

( (name)=>{ // unnamed iife
    console.log(`DB CONNECTED TWO ${name}`);
}

)("Radhe")
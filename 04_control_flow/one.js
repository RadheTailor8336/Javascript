const isuserLoggedin = true

// if(2==="2"){  // === is use for type checking
//      console.log("executed");
// }

const temperature =51

// if(temperature ===50){
//      console.log("less than 50");
// }

// else{
//      console.log("Temperature is greater than 50");
// }


// const score = 200
// if(score>100){
//      const power = "fly"
//      console.log(`User power : ${power}`);
// }
  // console.log(`User power : ${power}`); // it gives erros because , const power local scope se bahar access nhi kr skte  

  const balance = 1000

  // nested conditions
//   if(balance<500){
//           console.log("Less than 500");

//   } else if(balance <750){
//         console.log("Less than 750");

//   }else if(balance <900){
//         console.log("Less than 900");

//   }else{
//         console.log("Less than 1200");
//   }

const userLoggedIn = true
const debitCard = true
const loggedInfromGoogle = false
const loggedInfromEmail = true
if(userLoggedIn && debitCard ){ // dono condition ture honi chhaiye
     console.log("Allow to buy course")
}

if(loggedInfromGoogle || loggedInfromEmail){ // koi ek condition honi chaiye
     console.log("User logged in ");
}

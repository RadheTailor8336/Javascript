const userEmail = []

if(userEmail){
    console.log("Got user email");
    
}else{
    console.log("Dont have usere email");

    
}

//------- falsy values--------
//false, 0,-0,BigInt 0n, "" (empty string),null,undefined, NaN

//----Truthy values-----
//"0",'false'," "(string with space),[](empty array), {}(object), function(){}

// if (userEmail.length===0) {
//     console.log("Array is empty");
    
// }

const emptyObj={}

if (Object.keys(emptyObj).length===0 ){
    
    console.log("Object is empty");
}
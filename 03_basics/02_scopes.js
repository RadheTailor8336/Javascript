/**
 * ### 🌐 JavaScript Scope

**Scope** defines where variables can be **accessed or used** in your code.

#### 🔹 Types of Scope:
- **Global Scope**: Variables declared outside any function – accessible anywhere.
- **Function Scope**: Variables declared inside a function – accessible only within that function.
- **Block Scope**: Variables declared with `let` or `const` inside `{}` – accessible only inside that block.

#### 🔹 Example:
```javascript
let globalVar = "I am global";

function testScope() {
  let functionVar = "I am local to function";
  if (true) {
    let blockVar = "I am block scoped";
    console.log(blockVar); // ✅ Works
  }
  console.log(functionVar); // ✅ Works
  // console.log(blockVar); // ❌ Error
}

console.log(globalVar); // ✅ Works

 * 
 */


let a = 300
if(true){ //{} this is scope and inside the scope it is called block scope and iske bahar jo bhi code hoga vo global scope hai
let a =10
const b = 20
//var c = 30 // var ko block scope ke bahar bhi access kr skte hain
//onsole.log("INNER:",a); // op=INNER: 10
} 

// console.log(a);
// console.log(b);
// console.log(c);

//console.log(a); // yeh global scope ki value print krega,op=300

//Note! => code written in global scope can be accessed in the block scope but the vice-versa is not true

//Note! => Global Scope in console and node js environment (production code) is different

function one(){
    const username = "Radhey"

    function two(){
        const website ="youtube"
        //console.log(username) //  in nested functions , only child function parent ke variables ko  access kr skta hai
    
    }
        two()
}
one()

if(true){
  const username = "Radhey"
  if (username === "Radhey"){
    const website = " youtube"
   // console.log(username + website);

    }
   // console.log(website);  access nhi hoga because scope ke under hai 

}
//console.log(username)


// ++++++++ interesting ++++++++


console.log(addone(5)) 
function addone(num){ // yeh execute hoga 
  return num +1
}


addTwo(5)
const addTwo = function(num){ // yeh execute nahi hoga because addTwo(5) ko phle declare kiya hai or function ko ek variable ne hold kiya hai
  return num + 2
}

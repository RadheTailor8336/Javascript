let myName = "hitesh     "
let mychannel = "chai     "

//console.log(myName.trueLength);


let myHeros = ["thor","spiderman"];
let heroPower ={
    thor:"hammer",
    spiderman:"sling",

    getSpiderPower: function(){
       // console.log((`Spidy power is ${this.spiderman}`))
    }
}

Object.prototype.hitesh = function(){
  //  console.log(`hitesh is present in all objects`);
}


Array.prototype.heyHitesh = function(){
   // console.log(`Hiteh says Hello`);
    
}

//heroPower.hitesh()
myHeros.hitesh()
myHeros.heyHitesh()

// inheritance

const User ={
    name:"chai",
    email:"chai@gmail.com"
}


const Teacher ={
    makeVideo: true

}

const TeachingSupport ={
    isAvailable: false

}
const TASupport ={
    makeAssignment:'JS assignment',
    fullTime:true,
    __proto__: TeachingSupport
}

//Teacher.__proto__= User

// modern systax

Object.setPrototypeOf(TeachingSupport,Teacher);// inheritance

let anotherUsername = "ChaiAurCode"
String.prototype.trueLength= function(){
        console.log(`${this}`);
        //console.log(`${this.name}`);
        console.log(`True length is : ${this.trim().length}`);
        
}

anotherUsername.trueLength()
"hitesh".trueLength()
"iceTea".trueLength()



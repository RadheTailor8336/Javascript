const desctipter =Object.getOwnPropertyDescriptor(Math,"PI") // object ke hidden chizo ke baare mein btaati hai

//console.log(desctipter);


// console.log(Math.PI);
// Math.PI =5
// console.log(Math.PI);

const chai={
    name:"ginger chai",
    price: 250,
    isAvailable : true
}

//const mynewObject = Object.create(null) // method to create the objcet

console.log(Object.getOwnPropertyDescriptor(chai,"name"));

Object.defineProperty(chai,'name',{
      writable: false,
      enumerable: false,
      
    
})


console.log(Object.getOwnPropertyDescriptor(chai,"name"));

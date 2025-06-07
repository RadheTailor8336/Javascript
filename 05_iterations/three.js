// for of
// for...of loop is used to iterate over iterable objects like arrays, strings, etc.
// It gives direct access to the values of the iterable one by one.

const  arr = [1,2,3,4,5]

for (const num of arr) {
    
    //console.log(num);
    
}

const greetings = "Hello world"
for(const greet of greetings){
    //console.log(greet);
    
}

// Maps - 
// map() is a JavaScript array method that creates a new array
// by applying a callback function to each element of the original array.
// It does not modify the original array.


const map = new Map()
map.set('IN',"INDIA")
map.set('USA',"United States of America")
map.set('Fr',"France")

//console.log(map)

for(const [key,value] of map){
    //console.log(key,value);
    
}

const myObject ={
    'Game1':'NFS',
    'Game2': "Spiderman",

}
for (const [key,value] of myObject) {
    console.log(key,value);
}

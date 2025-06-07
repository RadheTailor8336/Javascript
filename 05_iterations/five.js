// forEach() is an array method that runs a callback function once for each element in the array.
// It does not return a new array, and it cannot be broken with break/continue.

const coding =["js","ruby","java","python","cpp"];

// coding.forEach( function (val){
//     console.log(val);
    

// })

// coding.forEach( (item)=> {
//     console.log(item)
// })

// function printme(item){
//     console.log(item);
// }

// coding.forEach(printme)

// coding.forEach( (item,index,arr) => {
//     console.log(item,index,arr);
// })

const myCoding = [
    
    
    {
        languageName:"javascript",
        languageFileName: "js"
    },
    {
        languageName:"java",
        languageFileName: "java"
    },
    {
        languageName:"python",
        languageFileName: "py"
    },

]

myCoding.forEach( (item)=>{
    console.log(item.languageName);

})
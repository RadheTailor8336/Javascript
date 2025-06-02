//array

const myArr = [0,1,2,3,4,5] // first method to create an array
const myHeors = ["shsktiman","naagaraj"]


const myArr2 = new Array(1,2,3,4) // second method to create an array
//console.log(myArr2)
//console.log(myArr[1])

//arrays methods
// myArr.push(6) // array ke under element add krta hai
// myArr.push(7) 
// myArr.pop() // last value ko remove karta hai


//myArr.unshift(9) // array ke start mein element add krta hai
//myArr.shift() // array ke start mein element ko pop kr deta hai

// console.log(myArr.includes(9)); // it gives(boolean)false , because array mein 9 present nhi hai
// console.log(myArr.indexOf(3)) // yeh btata hain ki elemnt kis index pr hai , output =3(index)


// const newArr= myArr.join() // arry ke elements ko add krke string mein convert krta hai


// console.log(myArr); // output =[ 0, 1, 2, 3, 4, 5 ] (array)
// console.log(newArr); // output = 0,1,2,3,4,5 (string)


console.log("A", myArr);

const myn1 = myArr.slice(1,3);//➡️ slice(1, 3) ka matlab hai: index 1 aur 2 ke elements: =[1, 2]
                            //Important: slice() original array change nahi karta, sirf copy deta hai.

console.log(myn1);
console.log("B", myArr);

const myn2= myArr.splice(1,3) //➡️ splice(1,3) ka matlab:index 1 se shuru karo,3 items delete karo:
console.log("C", myArr);
console.log(myn2);



/*
SUMMARRY:

1. Array is written in brackets [  ].
2.Array data type is an object.
3.Array can contain different data types . i.e string,number,boolean,array etc.
4. Array is zero based indexing. It starts with zero.
5. Once changed its original value will also change beacause it is non primitive (refrence) type.

ARRAY METHODs :

1.Push = adds value to last of an array.
2. Pop = removes last value of an array.
3. Unshift = adds value at first of an array.
4.Shift = removes first value of an array.
5. Includes = checks true or false.
6. IndexOf = checks the position of value in number form.
7.Join = converts to string.
8. Slice(value to remove from,value remove upto but don't include)= returns new array and original value remains unchanged. 
Use when you need to extract a portion of an array without modifying it.
9. Splice(value to delete from, number of value to delete) = returns new array with deleted one and original value changed.
Use when you need to add, remove, or replace elements within an array.
*/ 


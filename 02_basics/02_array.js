const marvel_heros = ["thor", "Ironman", "spiderman"]
const dc_heros = ["superman", "flash","spiderman","batman"]

 //marvel_heros.push(dc_heros)
// console.log(marvel_heros[3][1]);

// const allHeros = marvel_heros.concat(dc_heros) //Combines two or more arrays. This method returns a new array without modifying any existing array

// console.log(allHeros);

const all_new_heros = [...marvel_heros,...dc_heros]/** Spread operator ...:
                                                   Arrays ya objects ke elements ko expand karne ke kaam aata hai.
                                                  Yeh nayi array banata hai bina original arrays ko change kiye.*/
//console.log(all_new_heros);

const another_array = [1,2,3,[4,5,6],7,[6,7,[4,5]]]

const real_another_array =  another_array.flat(Infinity)//Returns a new array with all sub-array elements concatenated into it recursively up to the specified depth.
console.log(real_another_array);
/**
 * output of flat 
 * [
  1, 2, 3, 4, 5,
  6, 7, 6, 7, 4,
  5
]
 */

console.log(Array.isArray("Hitesh"))// output = false
console.log(Array.from("Hitesh")) // array mein convert krta hai , output =[ 'H', 'i', 't', 'e', 's', 'h' ]
console.log(Array.from({name:"hitesh"})) // empty array dega , op= []

let score1 = 100;
let score2 = 200;
let score3 =  300;

console.log(Array.of(score1, score2,score3)); // array mein convert kr dega ,op =[ 100, 200, 300 ]
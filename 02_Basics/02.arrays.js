const marvel_heros = ["thor", "Ironman", "spiderman"]
const dc_heros = ["superman", "flash", "batman"]

// marvel_heros.push(dc_heros)
// "push()" just enters a value and updates the array 

// console.log(marvel_heros);
// console.log(marvel_heros[3][1]);

// const allHeros = marvel_heros.concat(dc_heros)
// "concat()" will actually attches values of given array into an array and will return a New_Array

// console.log(allHeros);

const all_new_heros = [...marvel_heros, ...dc_heros]
// "..." means "spreading", it will return a array which will have all the values of given arrays treated as an individual elements.

// console.log(all_new_heros);

const another_array = [1, 2, 3, [4, 5, 6], 7, [6, 7, [4, 5]]]

const real_another_array = another_array.flat(Infinity)
console.log(real_another_array);
// "flat()" will return an array with all the elements including reocurring elements. 


console.log(Array.isArray("Hitesh"))
console.log(Array.from("Hitesh")) 
console.log(Array.from({name: "hitesh"})) // interesting
// "from()" converts given value into an Array.

let score1 = 100
let score2 = 200
let score3 = 300

console.log(Array.of(score1, score2, score3));
// "of()" creates an array of values of -> provided elements
// Arrays in JS are "resizable" and can have mixed values including "objects and array".

// JS array-copyOperations creates "shallow Copies -> pointing with reference to the orignalCopy"

// "deep Copies -> creates a copy of an object whose properties does not directs to same reference"

// "arrays have prototypes and another prototype in it, we'll discuss it later"

// Investigate different methods that can be executed on an array.  


// array

const myArr = [0, 1, 2, 3, 4, 5]
const myHeors = ["shaktiman", "naagraj"]

const myArr2 = new Array(1, 2, 3, 4)
// console.log(myArr[1]);

// Array methods

// myArr.push(6)
// myArr.push(7)
// myArr.pop()

// myArr.unshift(9)
// unShift() adds value at the starting Index of an array, so each value needs to be right-shifted.

// myArr.shift()
// shift() removes first value of an array, so each value needs to be left-shifted

// console.log(myArr.includes(9));
// console.log(myArr.indexOf(3));

// const newArr = myArr.join()
// join() converts an array into String as a comma-seperated List

// console.log(myArr);
// console.log( newArr);


// slice, splice
console.log("A ", myArr);

const myn1 = myArr.slice(1, 3)
console.log(myn1);
console.log("B ", myArr);
// "slice" doesn't include endIndex in the output and does not affect the array

const myn2 = myArr.splice(1, 3)
console.log(myn2);
console.log("C ", myArr);
// "splice" includes endIndex in the output and removes that portion from the array
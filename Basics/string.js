const name = "hitesh"
const repoCount = 50

// In JS string is internally stored as key-value pair as an object 
// console.log(name + repoCount + " Value");

console.log(`Hello my name is ${name} and my repo count is ${repoCount}`); 

// Use string Interpolation in practice as above.

const gameName = new String('hitesh-hc-com')

// console.log(gameName[0]);
// console.log(gameName.__proto__);

// prototype in JS is a topic it gives some functions/methods to perform with string (or any other object)

// console.log(gameName.length);
// console.log(gameName.toUpperCase());
console.log(gameName.charAt(2));
console.log(gameName.indexOf('t'));

const newString = gameName.substring(0, 4)
console.log(newString);

// subString() will give one letter less compared to given value

const anotherString = gameName.slice(-8, 4)
console.log(anotherString);

// slice() can have Negative value

const newStringOne = "   hitesh    "
console.log(newStringOne);
console.log(newStringOne.trim());

const url = "https://hitesh.com/hitesh%20choudhary"

console.log(url.replace('%20', '-'))

console.log(url.includes('sundar'))

console.log(gameName.split('-'));

// Go and have brief overview of all String methods, it will help in development
"use strict"; // treat all JS code as newer version

// alert( 3 + 3) // we are using nodejs, not browser

console.log(3 
    +
     3) // code readability should be high

console.log("Hitesh")


let name = "hitesh"
let age = 18
let isLoggedIn = false
let state;


// Primitives (call by value)
// number => returns number
// bigInt => returns bigInt
// string => "" returns String
// boolean => true/false returns Boolean
// null => standalone value "returns object!!"
// undefined => when not initialized "returns undefined"
// symbol => unique.. will discuss in react

// Non-Premitives (call by Reference)
// object => returns object
// function => returns function
// Array => returns object

console.log(typeof undefined); // prints undefined
console.log(typeof null); // prints object
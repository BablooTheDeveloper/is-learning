const user = {
    username: "hitesh",
    price: 999,

    welcomeMessage: function() {
        console.log(`${this.username} , welcome to website`);
        console.log(this);
    }

}

user.welcomeMessage()
// user.username = "sam"
// user.welcomeMessage()

// console.log(this);

// function chai(){
//     let username = "hitesh"
//     console.log(this.username);
// }
// in above case you can not access properties of a function using "this-keyword" like we can do in case of object.

// chai()

// const chai = function () {
//     let username = "hitesh"
//     console.log(this.username);
// }

// const chai =  () => {
//     let username = "hitesh"
//     console.log(this);
// }
// In above case "this" does not give contexts of function as it gives in case of funtion written inside of an object.

// chai()

// const addTwo = (num1, num2) => {
//     return num1 + num2
// }


// Implicit typing
// const addTwo = (num1, num2) =>  num1 + num2

// const addTwo = (num1, num2) => ( num1 + num2 )

// const addTwo = (num1, num2) => ({username: "hitesh"})
// in case of object we've to wrap object with "()" to return 
// In-short if you we use {} -> need to write return else not in case of () 

// console.log(addTwo(3, 4))

// const myArray = [2, 5, 3, 7, 8]

// myArray.forEach()
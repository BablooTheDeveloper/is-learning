// Dates are the objects in JS

let myDate = new Date()
// console.log(myDate.toString());
// console.log(myDate.toDateString());
// console.log(myDate.toLocaleString());
// console.log(typeof myDate);

// let myCreatedDate = new Date(2023, 0, 23)
// In above case month_representation starts from "0"

// let myCreatedDate = new Date(2023, 0, 23, 5, 3)
// By above method we can print Date and time both with the help of toLocalString()

// let myCreatedDate = new Date("2023-01-14")
// In above case(YYMMDD) month_representation starts from "1"

let myCreatedDate = new Date("01-14-2023") 
// Above representation is of (MMDDYY)

// console.log(myCreatedDate.toLocaleString());

let myTimeStamp = Date.now()

// console.log(myTimeStamp);
// console.log(myCreatedDate.getTime());
// console.log(Math.floor(Date.now()/1000));
// In above case (/1000) is used to convert ms->seconds

let newDate = new Date()
console.log(newDate);
console.log(newDate.getMonth() + 1);
console.log(newDate.getDay());

// `${newDate.getDay()} and the time `

newDate.toLocaleString('default', {
    weekday: "long",
    
}) // can customize methods like above
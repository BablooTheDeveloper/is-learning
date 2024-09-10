// console.log(2 > 1);
// console.log(2 >= 1);
// console.log(2 < 1);
// console.log(2 == 1);
// console.log(2 != 1);


// console.log("2" > 1); Implicit conversion
// console.log("02" > 1); Implicit conversion
// So, to avoid above cases compare values only with same datatype

console.log(null > 0);
console.log(null == 0);
console.log(null >= 0);

// In third & first case JS treats "null" as a number-0 only when it is being compared

console.log(undefined == 0);
console.log(undefined > 0);
console.log(undefined < 0);

// "===" compares dataType and value both

console.log("2" === 2);

const myObject = {
    js: 'javascript',
    cpp: 'C++',
    rb: "ruby",
    swift: "swift by apple"
}

for (const key in myObject) {
    //console.log(`${key} shortcut is for ${myObject[key]}`);
}
// In above case ${key} will print keys of the given object and ${myObject[key]} will print values of the given object


const programming = ["js", "rb", "py", "java", "cpp"]

for (const key in programming) {
    //console.log(programming[key]);
}
// array has "keys -> in form of numbers", So, we can use "for-in" loop on an array.


// const map = new Map()
// map.set('IN', "India")
// map.set('USA', "United States of America")
// map.set('Fr', "France")
// map.set('IN', "India")

// for (const key in map) {
//     console.log(key);
// }
// map is not iteratable!! that's why it gives nothing while using "for-in" loop, to iterate from map we've to use "for-of loop"
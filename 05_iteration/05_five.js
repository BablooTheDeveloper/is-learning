// "for-each" loop is mostly used with array
// "for-each" loop is higher-order loop with function

// the function used in for-each loop is known as "Callback function"
// "CallBack function" does not have name

const coding = ["js", "ruby", "java", "python", "cpp"]

// coding.forEach( function (val){
//     console.log(val);
// } )

// coding.forEach( (item) => {
//     console.log(item);
// } )

// function printMe(item){
//     console.log(item);
// }

// coding.forEach(printMe)
// You have to provide reference as an arg, do not perform function_call

// coding.forEach( (item, index, arr)=> {
//     console.log(item, index, arr);
// } )
// "for-each" loop has three args (items, index, wholeArray)

const myCoding = [
    {
        languageName: "javascript",
        languageFileName: "js"
    },
    {
        languageName: "java",
        languageFileName: "java"
    },
    {
        languageName: "python",
        languageFileName: "py"
    },
]

myCoding.forEach( (item) => {
    
    console.log(item.languageName);
} )
// above case is "most important in development"
// objects can be declared in two way 1.literal and 2.constructor

// object declared by constructor are called "singleton_Objetc"
// objects declared by literals are not singleton and it can have multiple object_copies.

// objects can have "key: value" pairs, it can include any thing even objects as well.
// "Keys" are treated as "String" in object_definition

// If we want to use a "symbole" as a key in object then we've to write it in '[]' while defining key in object.

// If we have to define non-changable object then use "freeze()"

// We can access properties of object by two ways 1) Using ".operator" and 2) Using "[]"

// "functions" can be treated as normal variables in JS



// singleton

// Below two ways are there two declare objects -
// Object.create
// object literals

const mySym = Symbol("key1")

const JsUser = {
    name: "Hitesh",
    "full name": "Hitesh Choudhary",
    [mySym]: "mykey1",
    age: 18,
    location: "Jaipur",
    email: "hitesh@google.com",
    isLoggedIn: false,
    lastLoginDays: ["Monday", "Saturday"]
}

// console.log(JsUser.email)
// console.log(JsUser["email"])
// console.log(JsUser["full name"])
// console.log(JsUser[mySym])

JsUser.email = "hitesh@chatgpt.com"
// Object.freeze(JsUser)
JsUser.email = "hitesh@microsoft.com"
// console.log(JsUser);

JsUser.greeting = function(){
    console.log("Hello JS user");
}
JsUser.greetingTwo = function(){
    console.log(`Hello JS user, ${this.name}`);
}

// If we want to use an object_property somewhere that is related to that object itself, use "this-keyword"

console.log(JsUser.greeting());
console.log(JsUser.greetingTwo());
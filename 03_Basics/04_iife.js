// Immediately Invoked Function Expressions (IIFE)


(function chai(){
    // named IIFE
    console.log(`DB CONNECTED`);
})();

// Here while using iief don't forget to put ";" in the end of definition otherwise the execution won't stop.

( (name) => {
    console.log(`DB CONNECTED TWO ${name}`);
} )('hitesh')
// Function Expressions
// storing a function in a variable
// calling the function works exactly the same !! 
// demonstrates how functions are saved as values in javascript
// using thius method functions can be used as return values or even arguments on other functions!!

// Example
const add = function(x, y){
    return x + y;
}

// Higer order functions
// functions that operate on/with other functions.
// - can accept othe funcitons as arguments
// - return a funciton

function callTwice(func){
    func();
    func();
}

function rollDie() {
    const roll = Math.floor(Math.random() *  6) + 1
    console.log(roll);
}

callTwice(rollDie);

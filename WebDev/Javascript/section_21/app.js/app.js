// Function Expressions
// storing a function in a variable
// calling the function works exactly the same !! 
// demonstrates how functions are saved as values in javascript
// using this method functions can be used as return values or even arguments on other functions!!
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


// Return a Funciton
function makeMysteryFunc(){
    const rand = Math.random();
    if(rand > 0.5){
        return function(){
            console.log('I am a good function')
            console.log('you win !!')
        }
    }
    else{
        return function(){
            alert("This is the other function")
        }
    }
}
const mystery = makeMysteryFunc();
mystery();



// generating a funciton within a funciton
// the inner function is saved to a variable and then able to be called again using the variable name.
function makeBetweenFunc(min, max){
    return function(num){
        // returns true if number is i the range and false if not
        return num >= min && num <= max;
    }
}

const isChild = makeBetweenFunc(0, 18);
isChild(15); // returns true
isChild(23); // returns false

const isAdult = makeBetweenFunc(19, 64);
isAdult(25); // returns true
isAdult(17); // returns false

const isSenior = makeBetweenFunc(65, 120);
isSenior(75); // returns true
isSenior(40); //returns false


// Defining Methods
// can add functions as properties on objects 
// these are methods in javascript
// object literal called math
const math = {
    mulitply : function(x, y){
        return x * y;
    },
    divide : function(x, y){
        return x / y;
    },
    square : function(x){
        return x * x;
    }
}
 console.log(math.mulitply(2,2));


 // Using 'this' keyword
 // access the property within the object literal
 // the value of 'this' depends on the invocation context of the function it is used in
 const person = {
    first : 'Nick',
    last : 'Dimarzo',
    fullName : function(){
        return `${this.first} ${this.last}`
    }
 }
person.fullName(); // Nick Dimarzo

// Another Example:
const hen = {
    name : 'Helen',
    eggCount : 0,
    layAnEgg(){
        this.eggCount += 1;
        return 'EGG'
    }
}



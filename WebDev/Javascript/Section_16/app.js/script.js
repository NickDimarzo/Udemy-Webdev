console.log("Hello World")

let total = 1 + 3;
console.log(total)

console.log('This is a test')

let randomNumber = Math.round(Math.random() * 10);
console.log(`The number is: ${randomNumber}`)


// Simple conditionals
if (randomNumber >= 5) {
    console.log("This number is 5 or greater");
} 
else {
    console.log("This number is less then 5");
}



// Simple demo nested conditions
const password = prompt("Please enter a new password");

// password must be 6+ characters 
if (password.length >= 6) {

    // password cannot include a space 
    if (password.indexOf(' ') === -1) {
        console.log("Password is Valid")
    }
    else {
        console.log("Password cannot contian spaces !!")
    } 
}
else {
    console.log("Password is to short")
}


// More logical operators
// AND = && 
// both sides must be true
const pass = prompt("Please enter your password")
if(pass.length >= 6 && pass.indexOf(' ')){
    console.log("VALID PASSWORD")
}
else{
    console.log("INVALID PASSWORD")
}


// OR = ||
// only one side needs to be true
// 0-5 free
// 5-10 $10
// 10-65 $20
// 65+ free
const age = prompt("Please enter your age:")
if (age >= 0 && age < 5 || age >= 65) {
    console.log("FREE")
}
else if (age >= 5 && age < 10) {
    console.log("$10")
}
else if (age >= 10 && age < 65) {
    console.log("$20")
}
else {
    console.log("INVALID AGE")
}

// NOT = !
// returns true if the expression is false
// !false = true
// !null = true
const firstName = prompt("enter your first name:")
if (!firstName){
    firstName = prompt("Please try again:")
}
 

// Switch Case
// Control Statment
const day = 2;
switch (day) {
    case 1:
        console.log("Monday");
        break;
    case 2:
        console.log("Tuesday");
        break;
    case 3:
        console.log("Wednesday");
        break;
    case 4:
        console.log("Thursday");
        break;
    case 5:
        console.log("Friday");
        break;
    case 6:
    case 7:
        console.log("Weekend");
        break;
    default:
        console.log("Thats not valid");
}
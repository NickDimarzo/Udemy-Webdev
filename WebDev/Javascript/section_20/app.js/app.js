// defining a function

// function functionName(){
//  add whatever code you want the function to run here
// }
function singSong(){    
    console.log('DO');
    console.log('RE');
    console.log('MI');
}

// calling a function
singSong();

// adding arguments
// allows the function to accept arguments
function greet(firstName){
    console.log(`Hey there, ${firstName}!`);
}
greet('Luke');


// adding multiple arguments
// seperate the parameters with commas
function greet(firstName, lastName){
    console.log(`Hey there, ${firstName} ${lastName[0]}.`);
}
greet('Luke', 'Skywalker');


// this function accepts a message and a number
// the function will repeat the message however many times as specifed by the number
function repeat(msgStr, numOftimes){
    for(let i = 0; i < numOftimes; i++){
        console.log(msgStr);
    }
}
repeat('Fuck You', 6);


// Return keyword
// allows the function to equal a value or output a value that can be saved
// return also stops the execution of the funciton
// can only return one thing
function add(x, y){
    if (typeof x !== 'number' || typeof y !== 'number'){
        return false;
    }
    let sum = x + y;
    return sum;
}
let sum = add(2,2);
console.log(sum);
let bad = add('blah', 4);
console.log(bad);


// days of week exercise using a object literal
function returnDay(num) {
    if (num < 1 || num > 7) {
      return null;
    }
    const days = {
      1: 'Monday',
      2: 'Tuesday',
      3: 'Wednesday',
      4: 'Thursday',
      5: 'Friday',
      6: 'Saturday',
      7: 'Sunday'
    };
    return days[num];
  }
  

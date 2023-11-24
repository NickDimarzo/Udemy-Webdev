// Syntax for every For loop : 
// for (
//     [initialExpression];
//     [condition];
//     [IncrementExpression]
// )
    
// simple example: counting up by 1
for (let i = 1; i <= 20; i++){
    console.log(i);
}

// print out even numbers from 0 - 20
for(let i = 0; i <= 20; i++){
    if(i % 2 === 0){
        console.log(i);
    }
}

// counting down by 5
for (let i = 25; i >= 0; i -= 5){
    console.log(i)
}

// looping over arrays
const animals = ['lions', 'tigers', 'bears'];

for (let i = 0; i < animals.length; i++) {
    console.log(i, animals[i])
}
// returns:
// 0 lions
// 1 tigers
// 2 bears

// Nested for loops
for (let i = 1; i <= 10; i++){
    console.log(`i is: ${i}`)

    for (let j = 1; j <= 3; j++){
        console.log(`   j is: ${j}`)
    }
}

// another nested loop example
const seatingChart = [
    ['Nick', 'Sofia', 'Jenny'],
    ['Kyle', 'Frank', 'Fred', 'Jack'],
    ['Claire', 'Rose', 'Charolette', 'Jose', 'Fredrick']
]

// Outer loop itterates over each array conatining the inner arrays
for (let i = 0; i < seatingChart.length; i ++) {
    const row = seatingChart[i];
    console.log(`ROW ${i + 1}`)

    // inner loop itterated over each item of the current inner array 
    for (let j = 0; j < row.length; j++){
        console.log(`This person is ${row[j]}`)
    }      
}

// While loops
// example prints 1 - 10
let num = -1;
while (num < 11) {
    num++;
    console.log(num);  
}

// secret code example
// const secretCode = "fuckyou"

// let guess = prompt("Enter the secret code");
// while (guess != secretCode){
//     guess = prompt("Enter the secret code");
// }
// console.log("You Win")

// using break keyword
let targetNum = Math.floor(Math.random() * 10);
let guess2 = Math.floor(Math.random() * 10);

while(true) {
    guess2 = Math.floor(Math.random() * 10);
    if (guess2 === targetNum) {
        console.log(`Correct Guessed: ${guess2} & target was ${targetNum}`);
        break;
    }
    else{
        console.log(`number ${guess2} is incorrect`)
    }
}

//another example
let input = prompt("Hey say somthing")
while(true) {
    input = prompt(input);
    if (input === "STOP") {
        break;
    }
}
console.log('YOU WIN')


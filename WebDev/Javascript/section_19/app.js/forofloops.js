// For of loops
// wayyyy betterrrr

const things = ['car', 'snow', 'apple', 'rabbit', 'tree', 'desk', 'chair']

for (let thing of things){
    console.log(thing);
}

const seatingChart = [
    ['Nick', 'Sofia', 'Jenny'],
    ['Kyle', 'Frank', 'Fred', 'Jack'],
    ['Claire', 'Rose', 'Charolette', 'Jose', 'Fredrick']
]

for (let row of seatingChart){
    for (let student of row){
        console.log(student);
    }
}


const testScores = {
    kyle: 67,
    rob: 40,
    jack: 99,
    sam: 58,
    blue: 49,
    red: 78,
    green: 89,
    dick: 89,
    harry: 89,
    tom: 93,
    frank: 65,
    rich: 67,
    bob: 76
}

// cannot itterate over object litterals with a for of loop
// need to use for in loop
// THIS IS OLD AND OUTDATED
 for (let person in testScores){
    console.log(`${person} scored ${testScores[person]}`)
 }

// these retuns arrays from the object litteral
// Object.keys(testScores)
// Object.values(testScores)
let total = 0;
let scores = Object.values(testScores);

for (let score in scores){
    total += score;
}

average = total / scores.length;

console.log(average);
// object literal is different then the objects created from classes
// data structure using pairs of keys and data to store info
// pretty similar to libraries in python

const person = {
    firstName : 'Nick',
    lastName : 'Dimarzo',
    age : 30
};
console.log(person);

// Differnt Syntax for accessing the data from an object literal
// using this syntax we can actually put expressions in the []
// can be more usefull
console.log(person['firstName']);
console.log(person['lastName']);
console.log(person['age']);

const years = {
    1999 : 'good',
    2000 : 'bad',
    2001 : 'great',
    2002 : 'alright'
};
let searchYear = '2001';
console.log(years[searchYear]);

//Normal syntax for accessing the data from an object literal
// cannot use this method if the keys are numbers
console.log(person.firstName);
console.log(person.lastName);
console.log(person.age);

//updating information in object litterals
const midterms = {
    danielle : 96,
    thomas : 78
};
console.log(midterms);
midterms.thomas = 79;
console.log(midterms);

// Can also add entries or keys to the object literal usign either syntax
midterms['danielle'] = 'A';
midterms['thomas'] = 'C+';
midterms.marry = 'F';
midterms['kyle'] = 'D';
console.log(midterms);

// Nesting Arrays and object
const comments = [
    {
        userName: 'Tammy', 
        text: 'lololol', 
        votes: 9
    },
    {
        userName: 'FishBoi', 
        text: 'glub glub', 
        votes: 8123}
]

//Accessing the information
console.log(comments[1]['text']) // returns 'glub glub'

//Another Example
const student = {
    firstName : 'David',
    lastName : 'Jones',
    strengths : ['Music', 'Art'],
    exams : {
        midterm: 92,
        final: 88
    }
}

//Accessing the information
console.log(student.exams.midterm) // returns 92
console.log(student['strengths'][1]) //returns 'Art'



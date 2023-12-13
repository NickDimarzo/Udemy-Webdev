// Array Callback Methods

// forEach Method
// accepts a callback function
// Calls the function once per element in the array

const numbers = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20];

// prints all the numbers that are divisible by 2
numbers.forEach(function(el) {
    if (el % 2 === 0){
        console.log(el)
    }
});

const movies = [
    {
        title : 'Amadeus',
        score : 99
    },
    {
        title : 'Stand By Me',
        score : 85
    },
    {
        title : 'Parasite',
        score : 95
    },
    {
        title : 'Alien',
        score : 90
    }
]

// prints the name of each movie and the score out of 100
movies.forEach(function(movie){
    console.log(`${movie.title} - ${movie.score}/100`)
})



// MAP
// creates a new array with the results of calling a callback on every element in the array
// mappign an array from one state to another

const texts = ['rofl', 'lol', 'omg', 'ttyl']

// returns an array where all the elements have been capitalized
const caps = texts.map(function(t){
    return t.toUpperCase();
})
console.log(texts);
console.log(caps);

// using the numbers array above (line 7)
// doubles every number and creats a new array
const double = numbers.map(function(num){
    return num * 2;
})
console.log(double)

// using the movies array above (line 17)
// form an array of just the movie titles
const titles = movies.map(function(movie){
    return movie.title
})
console.log(titles);



// Arrow Functions
// allows us to create funcitons without using the 'funciton' keyword
// can only be used for function expression, need to be saved to a variable
const add = function(x,y){
    return x + y;
}

const add2 = (x,y) => {
    return x + y;
}

const square = (x) => {
    return x ** 2;
}

// If there are no arguments need to include the empty brackets
const rollDie = () => {
    return Math.floor(Math.random() * 6) + 1
}
console.log(rollDie())

// Arrow function Implicit Returns
// can exclude the return keyword in certian situations
// use round brackets instead of curly
const add3 = (a,b) => (
    a + b
    );

// if kept on the same line brackets are not neede
const add4 = (a,b) => a + b;


// Using arrow functions with array methods
// using the movies array above (line 17)
// new array with the score out of 10

// const newMovies = movies.map(function(movie) {
//     return `${movie.title} - ${movie.score / 10}`
// })

// rewritten with an arrow function
const newMovies = movies.map(movie => (`${movie.title} - ${movie.score / 10}`))



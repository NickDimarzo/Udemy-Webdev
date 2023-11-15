// Arrays
// uses the [] bracktes 
// always use const for arrays

// empty array
const array = [];

// an array of strings 
const colors = ['red', 'orange', 'green'];

// an array of numbers
const lottoNums = [23, 14, 7, 90, 45, 54];

// mixed array
const mixed = [true, 99, 'string', null];

// accessing the elements in an array
let colorOne = colors[1];
console.log(colorOne);

// madifying the arrays
colors[0] = 'blue';
console.log(colors[0]);

// can add extra index at the end of the array without any errors
colors[10] = 'purple';
console.log(colors);

// Array Methods
// Push - add to end
const names = ['Nick', 'Charles', 'Kyle', 'Chance'];
names.push('Rico');
console.log(names);

// Pop - remove from end
// note the name is saved to a new variable and the array is shortened at the same time
let nameOne = names.pop();
console.log(names);
console.log(nameOne);

// Shift - remove from start
// note the name is saved to a new variable and the array is shortened at the same time
let nameTwo = names.shift();
console.log(names);
console.log(nameTwo);

// Unshift - add to start
names.unshift('Nick');
console.log(names);


// More Methods
// Concat - add 2 arrays together
const array1 = ['a', 'b', 'c'];
const array2 = ['d', 'e', 'f'];
const array3 = array1.concat(array2);
console.log(array3);

// includes - determines wether or not an array contains a certian value, boolean statment.
console.log(array3.includes('e')); //expected output = true
console.log(array3.includes('z')); //expected output = false

// indexOf - returns the first index at which the given argument is found
// will return -1 if the argument is not found
console.log(array3.indexOf('e')); // expected output = 4
console.log(array3.indexOf('z')); // expected output = -1


const cars = ['Ford', 'Chevy', 'GMC', 'Honda', 'Toyota', 'Cadilac', 'BMW', 'Mercedes'];
console.log(cars);

// slice - copies a portion of an array
// can pass in the begining or end or both
let american = cars.slice(0, 3);
console.log(american);

// splice - changes the contents of an array bt removing or replacing existing elements and/or adding new elements
// Syntax : 1st - where to start
//          2nd - how many things to delete
//          3rd - something to insert

// removing with splice - deleting Honda from cars
let asian = cars.splice(3, 2);
console.log(asian);
console.log(cars);

// inserting with splice 
let newCar = 'Lexus';
cars.splice(4, 0 , newCar);
console.log(cars);

// replace with splice
let newCar2 = 'Audi';
cars.splice(5, 1, newCar2);
console.log(cars);

// can create nested arrays
// use 2 index to target an item in the arrays
const nestedArray = [
    [1, 2, 3],
    ['one', 'two', 'three'],
    [4, 5, 6],
    ['four', 'five', 'six']
 ];
console.log(nestedArray);
console.log(nestedArray[2][1]);
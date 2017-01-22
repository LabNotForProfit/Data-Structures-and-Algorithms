// Arays

/*
An array is the simplest memory data structure

- stores a sequence of values that are all of the same data type
- javascript allows you to create arrays with values from different data types
- most languages do not have this capability, best practice to not do so
*/

var averageTempJan = 31.9;
var averageTempFeb = 35.3;
var averageTempMar = 42.4;
var averageTempApr = 52;
var averageTempMay = 60.8;

// As opposed to...
var averageTemp = [];
averageTemp[0] = 31.9;
averageTemp[1] = 35.3;
averageTemp[2] = 42.4;
averageTemp[3] = 52;
averageTemp[4] = 60.8;

// Creating and initializing arrays
var daysOfWeek = new Array();
var daysOfWeek = new Array('Sunday', 'Monday', 'Tuesday', 'Wednesday',
'Thursday', 'Friday', 'Saturday');

console.log(daysOfWeek.length);

for (var i = 0; i < daysOfWeek.length; i++){
  console.log(daysOfWeek[i]);
}

// Fibonacci sequence

var fibonacci = [];

fibonacci[0] = 1;
fibonacci[1] = 1;

for(var i = 2; i < 20; i++){
  fibonacci[i] = fibonacci[i-1] + fibonacci[i-2];
}

console.log(fibonacci);

for(var i = 0; i < fibonacci.length; i++){
  console.log(fibonacci[i]);
}

// Adding and removing elements

var numbers = [0,1,2,3,4,5,6,7,8,9];

numbers[numbers.length] = 10;

console.log(numbers);

// push method

numbers.push(11);
console.log(numbers);

// add as many elements as you want as arguments to the push method

numbers.push(12,13);
console.log(numbers);

// add a new element to the front of an array manually

for (var i = numbers.length; i >= 0; i--){
  numbers[i] = numbers[i-1];
}

numbers[0] = -1;
console.log(numbers);

/* javascript array class als ohas a method called unshift, which inserts
the values passed in the method's arguments at the start of an array
*/

numbers.unshift(-2);
console.log(numbers);
numbers.unshift(-4,-3);
console.log(numbers);

// removing with pop will remove the value at the end of an array

var popNumber = numbers.pop();
console.log(popNumber);
console.log(numbers);

// removing a value from the beginning of an array manually

for (var i = 0; i < numbers.length; i++){
  numbers[i] = numbers[i+1];
}
console.log(numbers);
// the last element of the array will be undefined until it is assigned something else

// We can use the shift method to remove an element from the beginning of an array

numbers.shift();
console.log(numbers);


// this will remove the

// the push and pop methods allow an array to emulate a basic stack data structure

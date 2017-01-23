// Array Methods

// Joining multiple arrays

var zero = 0;
var positiveNumbers = [1,2,3];
var negativeNumbers = [-3,-2,-1];

var numbers = negativeNumbers.concat(zero, positiveNumbers);
console.log(numbers);

/* You can pass as many arrays and objects/elements to this array as you want
the arrays will be concatenated to the specified array in the order that the
arguments are passed to the method. In the above example, zero is concatenated
to the array negativeNumbers, and then the array positiveNumbers is concatenated
to the newly formed array.
*/

// Iterator functions

var isEven = function(x){
  console.log(x);
  return (x % 2 == 0) ? true : false;
  // can also be simplified to return (x % 2 == 0)
};

var numbers = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15];

/* first method we'll look at is the every method, which will iterate each
element of the array until the return of the function is false
*/

numbers.every(isEven);

/* Next we have the some method...it has the same behavior as the every method
but wit will iterate each element of the array until the return of the function
is true
*/

numbers.some(isEven);

/* If we need the array to be completely iterated we can use the forEach function
which has the same result as a for loop with the function's code inside
*/

numbers.forEach(function(x){
  console.log((x % 2 === 0));
});

/* javascript has two other iterator methods that return a new array with a
 result...the first one being the map method
*/

var myMap = numbers.map(isEven);
console.log(myMap);

/* the new array stores the result of the isEven function that was passed to
the map method
*/

/* the filter method returns a new array with the element that the function
returns as true
*/

var evenNumbers = numbers.filter(isEven);
console.log(evenNumbers);
console.log(numbers);

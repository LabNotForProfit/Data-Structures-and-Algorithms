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

// Searching and sorting

// lets take our numbers array and put the elements out of order

numbers.reverse();
console.log(numbers);

numbers.sort();
console.log(numbers);

/* so that didn't work...the sort method sorts lexicographically and assumes
all elements are strings

we can also write our own comparison function and plug it into the sort method
*/

numbers.sort(function(a, b){
  return a - b;
});
console.log(numbers);

/* this comparison function will return a negative number if b is greater than
a, a positive number if a is greater than b, and zero if they are equal...if
a negative value is returned it implies that a is smaller than b, which is
further used by the sort function to arrange the elements
*/

// The comparison function could also look like this:

function compare(a, b){
  if(a < b){
    return -1;
  }
  if(a > b){
    return 1;
  }
  return 0;
}

numbers.reverse();
console.log(numbers);
numbers.sort(compare);
console.log(numbers);

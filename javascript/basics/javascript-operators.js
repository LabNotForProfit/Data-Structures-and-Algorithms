/* Operators used for performing any operation in a programming language
Javascript has arithmetic, assignment, comparison, logical, bitwise and
unary operators among others */

var num = 0;

// Arithmetic Operators

num = num + 2;
num = num * 3;
num = num / 2;
num++;
num--;

console.log(num);

// Assignment Operators

num += 1;
num -= 2;
num *= 3;
num /= 2;
num %= 3;

console.log(num);

// Comparison Operators

/* the identity operator (===) behaves identically to the equality operator (==)
except no type conversion is done, and the types must be the same to be considered
equal.

The equality operator (==) will compare for equality after doing any necessary
type conversions. For example 1 == '1' would yield true, for example. The
identity operator will not do type conversion at all, 1 === '1' would yield
false.  Try to use identity operators instead of equality operators. */

console.log('num == 1 : ' + (num == 1));
console.log('num === 1 : ' + (num === 1));
console.log('num != 1 : ' + (num != 1));
console.log('num > 1 : ' + (num > 1));
console.log('num < 1 : ' + (num < 1));
console.log('num >= 1 : ' + (num >= 1));
console.log('num <= 1 : ' + (num <= 1));

// Logical Operators

console.log('true && false : ' + (true && false));
console.log('true || false : ' + (true || false));
console.log('!true : ' + (!true));

// Bitwise Operators

console.log('5 & 1:', (5 & 1));
console.log('5 | 1:', (5 | 1));
console.log('~ 5:', (~5));
console.log('5 ^ 1:', (5 ^ 1));
console.log('5 << 1:', (5 << 1));
console.log('5 >> 1:', (5 >> 1));

// typeof vs instanceof

var num = 1;
var price = 1.5;
var name = 'Chris';
var trueValue = true;
var nullVar = null
var und;

console.log('typeof num:', typeof num);
console.log('typeof price:', typeof price);
console.log('typeof name:', typeof name);
console.log('typeof trueValue:', typeof trueValue);
console.log('typeof nullVar:', typeof nullVar);
console.log('typeof und:', typeof und);
console.log('typeof [1,2,3]:', typeof [1,2,3]);

// Delete Operators

var myObj = {name: 'John', age:21};
delete myObj.age;
console.log(myObj);

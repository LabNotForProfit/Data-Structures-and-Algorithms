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

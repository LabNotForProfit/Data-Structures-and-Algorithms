// variables refresher

var num = 1;

// not necessary to use the keyword 'var' it is best practice
//update existing variable
num = 3;
console.log(num);

// assigning a variable to a float
var price = 1.5;

// string
var name = 'Packt';

// Boolean
var trueValue = true;

// null value
var nullVar = null;

//undefined
var und;

console.log("num: " + num);
console.log("name " + name);
console.log("price " + price);
console.log("true value: " + trueValue);
console.log("nullVar: " + nullVar);
console.log("und: " + und);

// Variable Scope

var myVariable = 'global';
var myOtherVariable = 'global';

function myFunction(){
  var myVariable = 'local';
  return myVariable;
}

function myOtherFunction(){
  myOtherVariable = 'local';
  return myOtherVariable;
}

// log the variables at the global scope, outside of the functions
console.log(myVariable);
console.log(myOtherVariable);

// Call the functions which will return the altered variables within the local scope
console.log(myFunction());
console.log(myOtherFunction());

/* Log the variables again...the first will print global because it is referencing
the variable at a global scope, the second will print local because myOtherFunction
reassigned the value of the global variable instead of creating a new variable with
local scope */

console.log(myVariable);
console.log(myOtherVariable);

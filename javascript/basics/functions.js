// Functions

function sayHello(){
  console.log("Hello!");
}

sayHello();

function output(text){
  console.log(text);
}

output("Hello!");
output("Hello!", "How's it going?");

// in the above case the second argument is ignored

function sum(num1, num2){
  return num1 + num2;
}

var result = sum(1,2);
output(result);

// or
console.log(sum(1,2));

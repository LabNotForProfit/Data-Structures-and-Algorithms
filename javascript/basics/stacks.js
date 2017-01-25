// Stacks

/*
Stack is an ordered collection of itmes that follows LIFO (last in first out)
principle.  The addition of new items andthe removal of existing items
occurs at the same end.

The end of the stack is known as the top and the opposite is known as the base

Newest elements are near the top and the oldest elements are near the base

Stacks used by compilers in programming languages and by computer memory
to store variables and method calls
*/


/* IF we were to build a stack class in javascript, what properties and
methods would we need to include?

1) We would need an array to store the elements of the stack
2) Push to add new items to the top of the stack
3) pop to remove the top item from the stack (and to return removed element)
4) peek to return the top element from the stack (w/o modifying it)
5) isEmpty which will return true if stack is empty and false if not
6) clear which will remove all the elements in the stack
7) size which will return how many elements the stack contains
*/


function Stack(){

  var items = [];

  this.push = function(element){
    items.push(element);
  };

  this.pop = function(){
    return items.pop();
  };

  this.peek = function(){
    return items[items.length-1];
  };

  this.isEmpty = function(){
    return items.length === 0;
  };

  this.size = function(){
    return items.length;
  };

  this.clear = function(){
    items = [];
  };

  this.print = function(){
    console.log(items.toString());
  };
}

// using the stack class & testing your methods

var stack = new Stack();

console.log(stack.isEmpty());

stack.push(5);
stack.push(8);

console.log(stack.peek());
stack.print();

stack.push(11);

console.log(stack.size());
console.log(stack.isEmpty());

stack.push(15);

stack.pop();
stack.pop();

stack.print();

// Decimal to Binary

/* to convert a decimal number to a binary representation, we can divide
the number by 2 until the division result is 0.

*/

function divideBy2(decNumber){
  //create a stack to hold the remainders
  var remainderStack = new Stack(),
      rem,
      binaryString = '';

  while (decNumber > 0){
    remainderStack.push(Math.floor(decNumber % 2));
    decNumber = Math.floor(decNumber / 2);
  }
  // now you have to pop the elements into the binary string

  while (!remainderStack.isEmpty()){
    binaryString += remainderStack.pop().toString();
  }

  return binaryString;
}

console.log(divideBy2(10));
console.log(divideBy2(30));
console.log(divideBy2(50));

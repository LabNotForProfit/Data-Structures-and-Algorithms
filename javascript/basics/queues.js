// Queues

/* Queue is an ordered collection of items that follows the FIFO principle
(first in first out) principle.  The addition of new elements in a Queue
is at the tail and the removal is from the front. Newest element added must
wait at the end of the queue.
*/

// Creating a Queue

function Queue(){
  var items = [];

  this.enqueue = function(element){
    items.push(element);
  };

  this.dequeue = function(){
    return items.shift();
  };

  this.front = function(){
    return items[0];
  };

  this.isEmpty = function(){
    return items.length === 0;
  };

  this.clear = function(){
    items = [];
  };

  this.size = function(){
    return items.length;
  };

  this.print = function(){
    console.log(items.toString());
  };
}

// Using the queue class

var queue = new Queue();
console.log(queue.isEmpty());

queue.enqueue("John");
queue.enqueue("Jack");
queue.enqueue("Camila");

queue.print();
console.log(queue.size());
queue.dequeue();
queue.print();

queue.enqueue("John");
queue.print();

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

// The priority queue

/* a modified version of the queue, elements are added and removed based on
priority (think boarding an airplane).

Two different methods of doing this:

a) set the priority and add the element at the correct position
b) queue the elements as they are added to the queue and remove them according
to the priority.

-we'll go with option A.

*/

function PriorityQueue(){
  var items = [];

  function QueueElement (element, priority){
    this.element = element;
    this.priority = priority;
  };

  this.enqueue = funcction(element, priority){
    var queueElement = new QueueElement(element, priority);

    if (this.isEmpty()){
      items.push(queueElement);
    } else {
      for (var i = 0; i < items.length; i++){
        if (queueElement.priority < items[i].priority){
          items.splice(i, 0, queueElement);
          added = true;
          break;
        }
      }
      if(!added){
        items.push(queueElement);
      }
    }
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

/* The difference between these two is that we need to create a special
element to be added to the Priority Queue which contains both the element
and the Priority

If the queue is empty we simply enqueue the element. If not, we need to
compare it's priority to the rest of the elements in the collection. When we
find an item that has higher priority, we use splice to insert the element
one position before (still respecting items with same priority but added first)

-Once that element is found we stop looping the queue, the result being a queue
sorted and organized by priority

// Linked Lists

/* Dynamic data structure, we can add or remove items from it at will and it
will grow as needed

Some disadvantages to arrays

-Size of the array is fixed
-inserting/removing items from beginning or from the middle is expensive
because elements need to be shifted over

-Linked lists store a sequential collection of elements; but unlike arrays,
the elements are not placed contiguously in memory... Each element consists
of a node that stores the element itself and also a reference (AKA pointer or
 link) that points to the next element.

 Benefits of Linked lists

 -Do not need to shift elements over when adding or removing elements
 - IF we want to access an element in the middle, need to start from the head
 and iterate the list until we find the desired element ( as opposed to being
able to access any element in an array, sounds expensive )

*/

// Creating a linked list

function LinkedLIst() {
  var Node = function(element){
    this.element = element;
    this.next = null;
  };

  var length = 0;
  var head = null;

  this.append = function(element){};
  this.insert = function(position, element){};
  this.removeAt = function(position){};
  this.remove = function(element){};
  this.indexOf = function(element){};
  this.isEmpty = function(){};
  this.size = function(){};
  this.toString = function(){};
  this.print = function(){};
}

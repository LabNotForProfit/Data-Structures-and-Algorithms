// Doubly Linked lists

/*
Difference between a doubly linked list and a normal Linked list is that
we now have a double link: one for the next element and one for the previous
one.
*/

function DoublyLinkedList(){
  function Node(element){
    this.element = element;
    this.next = null;
    this.prev = null;
  }

  var head = null,
      tail = null,
      length = 0;
  
}

// Object-oriented programming

/* Javascript objects are very simple collections of name-value pairs,
there are two ways of creating a simple object in Javascript:
*/

var obj = new Object();

var obj = {};

// Can also createa n object entirely as follows:

obj = {
  name: {
    first: 'Gandalf',
    last: 'the Grey'
  },
  address: 'Middle Earth'
};

/* in OOP, an object is an instance of a class. A class defines the
characteristics of the object. For our algorithms and data structures, we
will create some classesthat will represent them...this is how we can declare
a class that represents a book
*/

function Book(title, pages, isbn){
  this.title = title;
  this.pages = pages;
  this.isbn = isbn;
}

// to instantiate this class, we can use the following code:

var book = new Book('The Fellowship of the Ring', '3403', '2341234113');

console.log(book.title);
book.title = 'The Return of the King';
obj.name.last = 'The White';
console.log(obj.name.last);

// A class also contains functions...we can declare and use a function as follows:

Book.prototype.printTitle = function(){
  console.log(this.title)
};
book.printTitle();

// We can declare functions directly inside the class definition as well

function Book (title, pages, isbn){
  this.title = title;
  this.pages = pages;
  this.isbn = isbn;
  this.printIsbn = function(){
    console.log(this.isbn);
  }
}

book.printIsbn();

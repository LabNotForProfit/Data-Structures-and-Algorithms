/* Sets are collections of items that are unordered and consist of unqiue elements (no repeats)
Sets with no elements are called null or empty sets, represented by {}
Sets have basic operations such as union, intersection, and difference */

function Set() {
  var items = {};

  this.has = function(value){
    return items.hasOwnProperty(value);
  };

  this.add = function(value){
    if (!this.has(value)) {
      items[value] = value;
      return true;
    }
    return false;
  };
}

newSet = new Set();
newSet.add(4);
console.log(newSet.has(4));

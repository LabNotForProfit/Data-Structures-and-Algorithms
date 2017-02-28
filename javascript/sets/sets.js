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

  this.remove = function(value){
    if(this.has(value)) {
      delete items[value];
      return true;
    }
    return false;
  };

  this.clear = function() {
    items = [];
  };

  this.size = function() {
    return Object.keys(items).length;
  };

  this.values = function() {
    return Object.keys(items);
  };

  this.union = function(otherSet){
    var unionSet = new Set();

    var values = this.values();
    for (var i = 0; i < values.length; i++){
      unionSet.add(values[i]);
    }

    var values = otherSet.values();
    for (var i = 0; i < values.length; i++){
      unionSet.add(values[i]);
    }

    return unionSet;
  };

  this.intersection = function(otherSet){
    var intersectionSet = new Set();

    var values = this.values();

    for (var i = 0; i < values.length; i++){
      if (otherSet.has(values[i])){
        intersectionSet.add(values[i]);
      }
    }
    return intersectionSet;
  };
}

var set = new Set();
newSet.add(4);
newSet.add(2);
newSet.add(3);

var otherSet = new Set();
otherSet.add(3);
otherSet.add(2);
otherSet.add(5);


set.intersection(otherSet);
console.log(intersectionSet);

/* Set operations

Union: given two sets, this returns a new set with the elements from both given sets
Intersection: Given two sets, this returns a new sets with the elements that exist in both sets
Difference: Given two sets, this returns a new set with all elements that exist in the first set and do not exist in the second set
Subset: This confirms whether a given set is a subset of another set

/*
Hashing consists of finding a value in a data structure in the shortest time possible
-Normally, if we want to get a value from a dictionary we need to iterate through it until we find it
-When we use a hash function we know which position the value is in already, so we simply retrieve it
-A hash function is a function that given a key will return an address in the table where the value is
*/

/*
-Should keep in mind that the lose lose hash function is pretty terrible but
prioritizes simplicity: look at some alternatives (in java) here:
http://erlycoder.com/49/javascript-hash-functions-to-convert-string-into-integer-hash-
*/

function HashTable() {

  var table = [];

  var loseloseHashCode = function(key){
    var hash = 0;
    for (var i = 0; i < key.length; i++){
      hash += key.charCodeAt(i);
    }
    return hash % 37;
  };

  this.put = function(key, value){
    var position = loseloseHashCode(key);
    console.log(position + ' - ' + key);
    table[position] = value;
  };

  this.remove = function(key){
    table[loseloseHashCode(key)] = undefined
  };

  this.get = function(key){
    return table[loseloseHashCode(key)];
  };

}

/* Dictionaries
Dictionaries just hashes, store key value pairs, much like sets which store key key pairs.
*/

function Dictionary(){
  var items = {};

  this.set = function(key, value){
    items[key] = value;
  };

  this.remove = function(key){
    if (this.has(key)){
      delete items[key];
      return true;
    }
    return false
  };

  this.has(key) = function(key){
    return key in items;
  };

  this.get = function(key){
    return this.has(key) ? items[key] : undefined;
  };

  this.clear = function(){

  };

  this.size() {

  };

  this.keys = function(){

  };

  this.values = function(){
    var values = [];
    for (var k in items){
      if (this.has(k)){
        values.push(items[k])
      };
    }
    return values;
  }
}

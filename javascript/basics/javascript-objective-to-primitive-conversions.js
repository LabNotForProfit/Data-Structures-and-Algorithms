/* Object to Prime Conversion in JS

Primitive vs. non-primitive values

5 primitive types which are associated with the various primitive values

-null: the value null
-undefined: the value Undefined
-number: all numbers, including NaN and infinity
-string: all strings of all lengths
-boolean: the values true and false

the rest are non-primitive values: objects, arrays and functions.

http://www.adequatelygood.com/Object-to-Primitive-Conversions-in-JavaScript.html

*/

// function population(country, pop){
//   return {
//     country: country,
//     pop: pop
//   };
// }
//
var unitedStatesPop = population("USA", 350e6);
var mexicoPop = population("Mexico", 200e6);
var canadaPop = population("Canada", 200e6);
//
// console.log((unitedStatesPop));
//
var northAmericaPop = unitedStatesPop + mexicoPop + canadaPop;
//
// console.log((northAmericaPop));

// toString

function population(country, pop){
  return {
    country: country,
    pop: pop,

    toString: function(){
      return "[Population " + "/" + country + "/"  + pop + "]";
    },

    valueOf: function(){
      return pop;
    }
  };

}

console.log(unitedStatesPop);
console.log(northAmericaPop);

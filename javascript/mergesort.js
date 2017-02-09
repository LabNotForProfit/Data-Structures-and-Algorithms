// Input: array of n numbers, unsorted
// Output: array of same numbers, sorted in increasing order

// 1) split input array in half
// 2) take the 1st half of the array and sort it recursively
// 3) take the 2st half of the array and sort it recursively
// 4) Combine the two arrays
//
// var unsorted = [5,4,1,8,7,2,6,3];
//
// function mergeSort(array){
//   var halfLength = Math.ceil(array.length / 2);
//   var leftSide = array.splice(0, halfLength);
//   var rightSide = array;
//
//
//
//
// }
//
// mergeSort(unsorted);
//
// function sort(arrayHalf){
//
// }

// var a = [34, 203, 3, 746, 200, 984, 198, 764, 9];

// function mergeSort(arr){
//   if (arr.length < 2)
//   return arr;
//
//   var middle = parseInt(arr.length / 2);
//   var left = arr.slice(0, middle);
//   var right = arr.slice(middle, arr.length);
//
//   return merge(mergeSort(left), mergeSort(right));
// }
//
// function merge(left, right){
//   var result = [];
//
//   while (left.length && right.length){
//     if (left[0] <= right[0]){
//       result.push(left.shift());
//     } else {
//       result.push(right.shift());
//     }
//   }
//
//   while (left.length){
//     result.push(left.shift());
//   }
//   while (right.length){
//     result.push(right.shift());
//   }
//
//   return result;
// }
//
// console.log(mergeSort(a));

var a = [34, 203, 3, 746, 200, 984, 198, 764, 9];

function mergeSort(array){
  if (array.length < 2) {
    return array;
  }

  var middle = parseInt(array.length / 2);
  var left = array.slice(0, middle);
  var right = array.slice(middle, array.length);

  return merge(mergeSort(left), mergeSort(right));
}

function merge(left, right){
  result = [];

  while (left.length && right.length){
    if (left[0] <= right[0]){
      result.push(left.shift());
    } else {
        result.push(right.shift());
      }
    }
    while (left.length){
      result.push(left.shift());
    }
    while (right.length){
      result.push(right.shift());
    }
  return result;
}

console.log(mergeSort(a));

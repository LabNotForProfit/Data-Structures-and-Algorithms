// Two dimensional arrays & multidimensional arrays

var averageTempDay1 = [72, 75, 79, 79, 81, 81];
var averageTempDay2 = [81, 79, 75, 75, 73, 72];

// We can be cleaner than that though

var averageTemp = [];
averageTemp[0] = [72, 75, 79, 79, 81, 81];
averageTemp[1] = [81, 79, 75, 75, 73, 72];

console.log(averageTemp);

/* Javascript only supports one-dimensional arrays, not matrices, but we can
implement matrices by using an array of arrays...same code above could be
written as follows
*/

averageTemp[0] = [];
averageTemp[0][0] = 72;
averageTemp[0][1] = 75;
averageTemp[0][2] = 79;
averageTemp[0][3] = 79;
averageTemp[0][4] = 81;
averageTemp[0][5] = 81;

averageTemp[1] = [];
averageTemp[1][0] = 81;
averageTemp[1][1] = 79;
averageTemp[1][2] = 75;
averageTemp[1][3] = 75;
averageTemp[1][4] = 73;
averageTemp[1][5] = 72;

console.log(averageTemp);

// if we would like to see an output of the matrix we can create a
// function to log its output

function printMatrix(myMatrix){
  for(var i = 0; i < myMatrix.length; i++){
    for(var j = 0; j < myMatrix[i].length; j++){
      console.log(myMatrix[i][j]);
    };
  };
}

printMatrix(averageTemp);

/* We can also work with multidimensional arrays in Javascript. Let's
create a 3x3 matrix...each cell will contain the sum of i(row) + j(column)
+ z(depth) of the matrix */

var matrix3x3x3 = [];

for (var i = 0; i < 3; i++){
  matrix3x3x3[i] = [];
  for (var j = 0; j < 3; j++){
    matrix3x3x3[i][j] = [];
    for (var z = 0; z < 3; z++){
      matrix3x3x3[i][j][z] = z + j + i;
    };
  };
}

// to ouptut the sum of this matrix we can use the following code

function print3DMatrix(matrix){
  for (var i = 0; i < matrix.length; i++){
    for (var j = 0; j < matrix[i].length; j++){
      for (var z = 0; z < matrix[i][j].length; z++){
        console.log(matrix[i][j][z]);
      };
    };
  };
}

print3DMatrix(matrix3x3x3);

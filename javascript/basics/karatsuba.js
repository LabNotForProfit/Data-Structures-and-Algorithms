function karatSuba(x,y)
{

  var x1, x0, y1, y0, base, m;
  base  = 10;


  if(( x < base )||( y < base )){
    return x * y;
  }

  var dummy_x = x.toString();
  var dummy_y = y.toString();

  var n = (dummy_x.length > dummy_y.length) ? dummy_y.length : dummy_x.length;
  m = Math.round(n/2);



  var high1 = parseInt(dummy_x.substring(0,dummy_x.length-m));
  var low1 = parseInt(dummy_x.substring(dummy_x.length-m,dummy_x.length  )) ;

  var high2 = parseInt(dummy_y.substring(0,dummy_y.length-m));
  var low2 = parseInt(dummy_y.substring(dummy_y.length-m,dummy_y.length));


  var z0   =   karatSuba( low1, low2);
  var z1   =   karatSuba(low1+high1, low2+high2);
  var z2   =   karatSuba(high1,high2);

  var res  =   (z2 *  Math.pow(10, 2 * m )  ) + ( (z1-z2-z0) * Math.pow(10,  m )) + z0;

  return res;

 }

var a = 3141592653589793238462643383279502884197169399375105820974944592;
var b = 2718281828459045235360287471352662497757247093699959574966967627;
// console.log(karatSuba(a,b));
// console.log(a * b);

// Attempt #2

function karatsubaMulti(x, y) {

  let n = Math.min(('' + x).length, ('' + y).length);

  if(n == 1)
    return x * y;

  let tenpowhalfn = Math.pow(10, parseInt(n / 2));
  let tenpown = Math.pow(10, 2 * parseInt(n / 2));

  let a = parseInt(x / tenpowhalfn);
  let b = x % tenpowhalfn;
  let c = parseInt(y / tenpowhalfn);
  let d = y % tenpowhalfn;

  let caller = arguments.callee;

  return tenpown * caller(a, c) + tenpowhalfn * (caller(a, d) + caller(b, c)) + caller(b, d);
}

var a = 3141592653589793238462643383279502884197169399375105820974944592;
var b = 2718281828459045235360287471352662497757247093699959574966967627;
console.log(karatsubaMulti(a,b))

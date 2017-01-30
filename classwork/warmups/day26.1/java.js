var n = 123456789;
var d = n.toString().length;
var digits = [];
var squaredDigits = [];
for (i = d; i >= 1; i--) {
    var j = k / 10;
    var r = (n % k / j) - 0.5;
    var k = Math.pow(10, i);
    var result = r.toFixed(); 
    digits.push(result);
}
console.log(digits);
////////////////////
var arr = [1,2,3,4,5];
var strArr = arr.map(function(e){return e.toString()});
console.log(strArr);
/////////////////////
var num = 827634825;
var nims = num.toString();
var final = [];
for(var i=0; i<nims.length; i++) {
    final.push(parseInt(nims[i]));
}
console.log(final);
///////////////////
function convertIntToAr(int) {
  var temp = int.toString();
  var arr = [];
  for(var i = 0; i < temp.length; i++) {
    arr.push(parseInt(temp[i]));
  }
  return arr;
}
console.log(convertIntToAr(133234));
/////////////////
var readlineSync = require("readline-sync");
var first = readlineSync.question("enter a number");
var second = readlineSync.question("enter another number");
var third = readlineSync.question("enter one more number");
var numbersArry = [];
numbersArry.push(third);
numbersArry.push(first);
numbersArry.push(second);
numbersArry.sort(
//var points = [9, 10, 5, 2, 15];
function(a, b){
    return a - b;
}
);
console.log(numbersArry);
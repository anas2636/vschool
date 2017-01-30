/*
//var second ="";
function factorial(n) {
    var z = 1;
    for(var i=1; i<=n; i++){
  //    second = n + "* n-1"; 
        z = z*i;
    }
    console.log(z);
}


factorial(3);


var fact = 1;
function factorial(n) {
    for(var i=n; i>=1; i--){
        fact = fact*i;
    }
    return fact;
}
console.log(factorial(3));*/
/*var student = {
    name: "Sendus Majanni",
    dateofBirth: "1/jan/1999",
    phoneNumber: 76040916,
    grades:[90, 55, 85, 70, 65],
    result: ""
};*/
//console.log(student);
/*function low(g){
    var lowest = g.grades[0];
    for(var i=0; i<g.grades.length; i++){
        if(lowest>g.grades[i+1]){
            lowest = g.grades[i+1];
        }
    }
   console.log(g.name + "lowest grade is: " + lowest);
}
 low(student);*/

var student = [{
    name: "anas ",
    dateofBirth: "1/jan/1999",
    phoneNumber: 76040916,
    grades:[40, 55, 35, 70, 45],
    result: "",
    av:0,
},{
     name: "yaser ",
    dateofBirth: "1/jan/1999",
    phoneNumber: 76040916,
    grades:[80, 70, 95, 90, 66],
    result: "",
    av:0,
},{
     name: "ahmad ",
    dateofBirth: "1/jan/1999",
    phoneNumber: 76040916,
    grades:[10, 60, 15, 94, 45],
    result: "",
    av:0,
},{
     name: "wassem ",
    dateofBirth: "1/jan/1999",
    phoneNumber: 76040916,
    grades:[80, 75, 69, 90, 60],
    result: "",
    av:0,
} ];


function sort(a,b){
    return a.avg - b.avg;
    
    
}

function average(obj) {
    var summation = 0;
    var count = 0;
    for(var i=0; i<obj.length; i++) {
        for(var j=0; j<obj[i].grades.length;j++){
        summation = summation + obj[i].grades[j];
        count++;
        }
  //  for(var i=0; i<student.length+1;i++){
    if((summation/count) <60){
        obj[i].av=summation/count;
        obj[i].result="fail";
        
    } else {
        obj[i].av=summation/count;
        obj[i].result="pass";
    }
    
    
        console.log(obj[i].name + "total grade : " +obj[i].av+" "+obj[i].result);
}}

average(student);
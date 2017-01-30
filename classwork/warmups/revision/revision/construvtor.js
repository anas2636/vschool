var student = function(name,age,phone,grade) 
{ this.sname = name;
 this.sage = age;
 this.sphone = phone;
 this.sgrade = grade;
 
this.stud = function(){
    var qwe = new Date();
console.log(" hi"+ this.sage + qwe + " no");
}};

var student1= new student("anas",23,jan 12 1993,[40, 55, 35, 70, 45]);
var student2= new student("sendos",22,9816389213,[50, 66, 45, 80, 55]);
var student3= new student("nader",5,98213,[50, 65, 45, 80, 55]);
var student4= new student("haitham",32,389213,[60,35, 25, 70, 25]);
var student5= new student("jacob ",42,9213,[100,35, 25, 30, 25]);

console.log(student1);
//student1.sname();
 
student1.stud();
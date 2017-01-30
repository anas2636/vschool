var dimensionArray=function(){
var omega = '\u03A9';
var alpha = '\u03B1';

for(var i=0; i<10; i++){
    var array=[];
for(var j=0; j<10; j++){
        if(j%2==0){
            array.push(omega);
        }
    else
       {
        array.push(alpha);   
           }
           }
    console.log(array.join(" "));
               }
    }
dimensionArray;
var dimensionArray=function(){
var omega = '\u03A9';
var alpha = '\u03B1';
var array=[];
for(var i=0; i<10; i++){
 array=[i][];
for(var j=0; j<10; j++){
        if(j%2==0){
            array[i].push(omega);
        }
    else
       {
        array[i].push(alpha);   
           }
           }
    console.log(array[i].join(" "));
               }
    }
dimensionArray;
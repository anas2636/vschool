 var findch = function( letter ){
   var strx='';
   var misfits ='';
   
   for(var i=0; i<letter.length; i++){
       if(strx.indexOf(letter[i])==-1){
           strx += letter[i];
       } else {
           
           misfits += letter[i];
       }
   } 
  // return [strx , misfits ];
console.log(strx);
console.log(misfits);
}
 
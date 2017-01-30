var text =function(limit) {
    var fibs = [0,1];
    for (var i=0; i<limit - 1; i++){
       fibs.push(fibs[i - 1] + fibs[i]);
        
    } 
    return fibs.reduce(function(a, b){
        return a + b;
    })
var sun =0;
}
    
//    for(var j=i; j<i; j++)

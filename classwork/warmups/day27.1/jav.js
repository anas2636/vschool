//function convertIntToAr(int) {
//    var temp = int.toString();
//    var arr = [];
//    for (var i = 0; i < temp.length; i++) {
//        arr.push(parseInt(temp[i]));
//    }
//    return arr;
//}
//console.log(convertIntToAr(34));
//
//function text(bnv) {
//    var te = Math.PI;
//    var rt = Math.sqrt();
//    for (var j = 0; j < arr.length; j++) {
//        if ()
//    }
//}

function intToAr(num) {
  var temp = num.toString();
  var ar = [];
  for(var i = 0; i < temp.length; i++) {
    ar.push(parseInt(temp[i]));
  }
  return ar;
}

function sqrArr(ar) {
  var value = 0;
  for(var i = 0; i < ar.length; i++) {
    value += Math.pow(ar[i], 2);
  }
  return value;
}

function isHappyNum(num) {
  var result = num;
  var count = 0;
  do {
    result = sqrArr(intToAr(result));
    if(result == 1) {
      return true;
    } else if(count > 10000) {
      return false;
    }
    count += 1;
  } while(result > 1);
}
console.log(isHappyNum(123));
////////////////////////////////////
function changeIntIntoArrayOfInt(x){
    
    var y = x.toString();
    var arr=[];
     var sum = 0;
    
    for (var i=0 ; i< y.length ; i++){
        var temp = parseInt(y[i]);
        arr.push(temp);
       sum += (arr[i] * arr[i])
        
    }
    console.log(arr);
    console.log(sum);
    
    if( sum > 1 ){
        
        changeIntIntoArrayOfInt(sum)
        
    }else{
        
        console.log("happy number")
    }
    
}

changeIntIntoArrayOfInt(19);
/////////////////////////////////////
function happyNumber(happyNb){
    var count=0;
    var newhappyNb=(""+happyNb).split("");
    var total=0;
    while(happyNb>1)
        {
            count++;
            newhappyNb=[];
            newhappyNb=(""+happyNb).split("");    
            for(var i=0;i<newhappyNb.length;i++){
                total += (newhappyNb[i]*newhappyNb[i]);
            }  
           
          happyNb=total;
          total=0;
          console.log("The number is now: "+happyNb);
            if(count>50)
                {
                    break;
                console.log("still not happy number is now: "+happyNb); 
                }
        }
    if(happyNb<=1)
    console.log("The happy number is now: "+happyNb);
}

happyNumber(19);
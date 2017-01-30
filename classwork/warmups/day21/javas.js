for (var i=0; i<=100; i++){
    if ( i % 3 === 0 && i % 5 === 0){
        console.log("FizzBuaz" + " :  " + i);
    } else if ( i % 3 === 0) {
         console.log("Fizz" +"   :    "+ i);
    } else if ( i % 5 === 0 ){
        console.log("Buaz" + "   :    "+i);
    } else {
        console.log("            " +i);
    }
};

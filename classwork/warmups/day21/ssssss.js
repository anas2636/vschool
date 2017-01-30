//$("#text").click(function(){
//     $(this).css("color","red");
//});
   
    
//})
//$("#text").css(){
//    $(this).html("color","red");
//    
//});
//var colors = ["red", "","",""];
//function randNumber(min, max ) {
//    return Math.floor(Math.random() * (max - min +1))
//}
//function getColor() {
//    return colors[randNumber(0, colors.length -1)];
//    
//};
//for(var i =0; i <5; i++) {
//    console.log(getColor());
//};
function randNumber(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}

function changeColor() {
  var colors = ["#D81B60", "#827717", "#B388FF"];
  var color = colors[randNumber(0,  colors.length - 1)];
  $("#text").css("color", color);
}

$("#color-button").click(changeColor);
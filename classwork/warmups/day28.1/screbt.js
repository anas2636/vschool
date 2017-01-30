////document.getElementById("text").innerHTML = 
//$("#text").click("background-color", "coral");
//$("#text").hover("background-color", "red");
//$("#text").("background-color", "greenyellow");
//$("#text").("background-color", "dodgerblue");
//$("#text").("background-color", "yellow");
////$("#text").("background-color", "dodgerblue");
$(".red").dblclick(function(){
$(".red").css("background-color", "greenyellow");
});
$(".red").mouseenter(function(){
$("#text").css("background-color", "dodgerblue");
});

$(window).scroll(function(){
$(".red").css("background-color", "coral");
});
$(".red").mouseleave(function(){
$(".red").css("background-color", "yellow");
});
$(window).keydown(function(e){
    console.log("hi");
    var uniCode=e.keyCode;
    console.log(uniCode+" "+e);
    if(uniCode==82)
{$(".red").css("background-color", "black");}
});

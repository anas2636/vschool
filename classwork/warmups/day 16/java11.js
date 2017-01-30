////document.getElementById("text").innerHTML = 
//$("#text").click("background-color", "coral");
//$("#text").hover("background-color", "red");
//$("#text").("background-color", "greenyellow");
//$("#text").("background-color", "dodgerblue");
//$("#text").("background-color", "yellow");
////$("#text").("background-color", "dodgerblue");
$("#text").dblclick(function(){
$("#text").css("background-color", "greenyellow");
});
$("#text").mouseenter(function(){
$("#text").css("background-color", "dodgerblue");
});

$(window).scroll(function(){
$("#text").css("background-color", "coral");
});
$("#text").mouseleave(function(){
$("#text").css("background-color", "yellow");
});
$(window).keydown(function(e){
    console.log("hi");
    var uniCode=e.keyCode;
    console.log(uniCode+" "+e);
    if(uniCode==82)
{$("#text").css("background-color", "black");}
});


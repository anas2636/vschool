var deleteItem = function(anoterId){
    $(anoterId).remove();
}
$("#qwert").click(function(){
    var another = $("#input").val();
    $("#text1").append("<li id=" + another + "><button id=" + another + " onclick=  'deleteItem(" + another + ")' > X </button>" + another + "</li>");
    $("#input").val("");
});
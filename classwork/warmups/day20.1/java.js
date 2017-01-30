var people = [];

$("#submit").click(function() {
  people.push({
    name: $("#name").val(),
      game: $("#game").val(),
      date: $("#date").val(),
    grande: $("#grade").val()
  });
  render();
  $("#name").val("");
    $("#game").val("");
    $("#date").val("");
  $("#grade").val("");
});


var render = function() {
  $(".output").html("");
  people.sort(function(a, b) {
    return a.grade - b.grade;
  });
  for(var i = 0; i < people.length; i++) {
        $(".output").append("<div>Name:" + people[i].name  +" game: "+ people[i].game +  "date: " +  people[i].date + " grande: " + people[i].grade +"</div>");
   };
}
$("#reset").click(function() {
    
})
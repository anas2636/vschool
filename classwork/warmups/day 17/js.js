$("#submit").click(function() {
    var firstname = $("#firstname").val();
    var lastname = $("#lastname").val();
    var age = $("#age").val();
    var gender = $("input:radio[name=gender]").val();
    var location  = $("#location").val();
//    var diet = $("#diet").val();
    var diet = $("input:radio[name=diet]").val();
    alert("firstname: " + firstname + "lastname: " + lastname + "age: " + age+ "gender: " + gender + "location: " + location + "diet" + diet);
});
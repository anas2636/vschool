function loadData() {
    $.ajax({
        url: "http://api.vschool.io/class/todo",
        type: "GET",
        success: function (data) {
            $(".added").html("");
            for (var i = 0; i < data.length; i++) {
                $(".added").append("<li id='" + data[i]._id + "'>" + data[i].title + "</li>");
            }
        }
    });
}
//$("#get").ready(function(){
//    loadData();
//})
$(document).ready(function() {
    loadData();
});

function addData() {
    var title = $("#qwer").val();
    var data = {
        title: title
    };
    $.ajax({
        url: "http://api.vschool.io/class/todo/",
        type: "POST",
        data: data,
        success: function () {
            loadData();
            $("#qwer").val("");
        }

    });
}
$("#get").click(function () {
    loadData();
})

function addDeleteEventListeners() {
    console.log("function is called");
    $("li").click(function () {
        var id = $(this).attr("id");
        $.ajax({
            url: "http://api.vschool.io/class/todo/" + id,
            type: "DELETE",
            success: function () {
                loadData();

            }
        });
    })
}
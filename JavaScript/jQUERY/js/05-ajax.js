$(document).ready(function(){
    //Load
    //$("#datos").load("https://reqres.in/api/");

    //Get y post
    $.get("https://reqres.in/api/users?page=2", {page: 3}, function(response){
        response.data.forEach((element,index) => {
            $("#datos").append("<p>" + element.first_name + " " + element.last_name + "</p>");
        });
    });

    var usuario = {
        nombre: "Juan David",
        Apellido: "Restrepo",
    }
    $.post("https://reqres.in/api/201",usuario, function(response){
        console.log(usuario);
    });
});
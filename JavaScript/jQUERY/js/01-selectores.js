$(document).ready(function(){
	console.log("jQuery Cargado...");

	//Selector de ID
	$("#rojo").css("background", "red")
			  .css("color", "white");

	$("#amarillo").css("background", "yellow")
			  .css("color", "white");

	$("#azul").css("background", "blue")
			  .css("color", "white");

	//Selector de clases
	var mi_clase = $(".zebra");

	mi_clase.css("border", "5px dashed black");

	//Selectores por etiqueta
	var parrafos = $('p').css("cursor", "pointer");

	parrafos.click(function(){
		var that = $(this);
		if (that.hasClass("zebra")) {
			$(that).addClass("grande");
		}
	});

});
$(document).ready(function(){
	//Eventos Mouseover y Mouseout

	var caja = $("#caja");

	/*
	caja.mouseover(function(){
		$(this).css("background", "red");
	});

	caja.mouseout(function(){
		$(this).css("background", "green");
	});

	*/
	

	function cambiaRojo(){
		$(this).css("background", "red");
	}

	function cambiaVerde(){
		$(this).css("background", "green");
	}

	//Hover
	caja.hover(cambiaRojo, cambiaVerde);

	//Evento click, doble click
	caja.click(function(){
		$(this).css("background", "blue")
			   .css("color", "white");
	});

	caja.dblclick(function(){
		$(this).css("background", "pink")
			   .css("color", "black");
	});

	//focus y blur

	var nombre = $("#nombre");

	nombre.focus(function(){
		$(this).css("border", "2px solid green");
	});

	nombre.blur(function(){
		$(this).css("border", "2px solid transparent");
	});

});
'use strict'


//Eventos del raton
function cambiarColor(){
	var bg = boton.style.background;

	if (bg == "green") {
		boton.style.background = "red"; 
	}else {
		boton.style.background = "green";
	}
	boton.style.padding = "15px";
	boton.style.border  = "2px solid #ccc";
	return true;
}

var boton = document.querySelector("#boton");

boton.addEventListener('click', function(){
	cambiarColor();
});

//Mouseover
boton.addEventListener('mouseover', function(){
	boton.style.background = "#ccc";
});

//Focus
var input = document.querySelector("#campo_nombre");

input.addEventListener('focus', function(){
	console.log("Foco en el input");
});

//Blur
input.addEventListener('blur', function(){
	console.log("Foco fuera input");
});

//Keydown
input.addEventListener('keydown', function(){
	console.log("Pulsando una tecla", String.fromCharCode(event.keyCode));
	console.log();
});

//Keypess
input.addEventListener('keypress', function(){
	console.log("Tecla presionada: ", String.fromCharCode(event.keyCode));
	console.log();
});

//Keyup
input.addEventListener('keyup', function(){
	console.log("Tecla Soltada: ", String.fromCharCode(event.keyCode));
	console.log();
});
'use strict'

//DOM Document Object Model
function cambiacolor(color){
	caja.style.background = color;
}

//var caja = document.getElementById('micaja');


//caja.style.background = "red";
//caja.style.padding = "20px";
//caja.style.color = "white";

//Obtener elementos por su etiqueta
var todosloselementos = document.getElementsByTagName('div');
//var contenido = todosloselementos[2].textContent;

/*todosloselementos.forEach((valor, indice) => {
	var parrafo = document.createElement("p");
	var texto = document.createTextNode(valor);
	parrafo.appendChild(texto);

	document.querySelector("#miseccion").appendChild(parrafo);
});*/

for(let valor in todosloselementos){
	var parrafo = document.createElement("p");
	var texto = document.createTextNode(todosloselementos[valor].textContent);
	parrafo.appendChild(texto);
}

//console.log(contenido);
//Seleccionar elementos de una clase
var divsRojos = document.getElementsByClassName('rojo');

for (let div in divsRojos) {
	if (divsRojos[div].className == "rojo") {
		divsRojos[div].style.background = "red";
	}	
}

//Query Selector 
var id = document.querySelector("#encabezado");
console.log(id);

var etiqueta = document.querySelector("div.rojo");
console.log(etiqueta);
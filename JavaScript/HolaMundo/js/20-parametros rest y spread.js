'use strict'

//Parametros Spread y Rest
function listafrutas(fruta1, fruta2, ...resto_frutas){
	console.log("fruta1: ", fruta1);
	console.log("fruta2: ", fruta2);
	console.log(resto_frutas);
}
listafrutas("Naranja", "Melon", "Sandia", "Piña", "Naranja", "Mango");

var frutas = ["Naranja", "Melon", "Sandia", "Piña", "Naranja", "Mango"];

listafrutas(...frutas, "Sandia");
// Let y var
'use strict'

//Prueba let y var
var numero = 40;
if (true) {
	var numero = 50;
	console.log(numero);
}
console.log(numero);

//Prueba con Let
var texto = "Curso Js";
console.log(texto);

if (true) {
	let texto = "Curso Laravel 5";
	console.log(texto);
}

console.log(texto);
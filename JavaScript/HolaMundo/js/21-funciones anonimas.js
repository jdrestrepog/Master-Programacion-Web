'use strict'

//Funciones anonimas
//Es una funcion que no tiene nombre

var pelicula = function(nombre){
	return "La pelicula: " + nombre;
}

//Callback: una funcion que se ejecuta dentro de otra

function  sumame(num1, num2, sumaymuestra, sumapor2){
	var suma = num1 + num2;
	sumaymuestra(suma);
	sumapor2(suma);
}

sumame(5,7,function(dato){
		console.log("La suma es: ", (dato));
	},
	function(dato){
		console.log("La suma por dos es: ", (dato*2));
	});

//Funciones de flecha

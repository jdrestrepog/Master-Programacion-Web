'use strict'

//Local Storage


if (typeof(Storage) !== 'undefined') {
	console.log("Local Storage Disponible");
}else{
	console.log("Local NO Storage Disponible");
}

//Guardar Datos en el Local Storage
localStorage.setItem("titulo","Curso de Symfony 3");

//Recuparar Elemento
console.log(localStorage.getItem("titulo"));

//Guardar Objetos
var usuario = {
	nombre: "Juan",
	mail:   "juan@prueba.com",
	web: "juan.com"
};

localStorage.setItem("usuario", JSON.stringify(usuario));

//Recuperar Objeto
var userjs = JSON.parse(localStorage.getItem("usuario"));
console.log(userjs);
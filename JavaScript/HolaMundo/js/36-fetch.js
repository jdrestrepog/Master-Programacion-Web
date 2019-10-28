'use strict'

// FETCH y peticiones a servicios (API-REST)
var div_usuarios = document.querySelector("#usuarios");
var div_usuario  = document.querySelector("#usuario");
var usuarios = [];

	getUsuarios()
	.then(data => data.json())
	.then(usuarios => {
		listadoUsuarios(usuarios);

		return getUsuario();		
	})
	.then(data => data.json())
	.then(usuario => {
		
	    listadoUsuario(usuario.data);

	    return getInfo();	
	})
	.then(data=>{
		console.log(data);
	})
	.then(error=>{
		console.log(error);
	});

function getUsuarios(){
	return fetch("https://jsonplaceholder.typicode.com/users");
}

function getUsuario(){
	return fetch("https://reqres.in/api/users/2");
}

function listadoUsuarios(usuarios){
	usuarios.map((user, i) =>{
			let nombre = document.createElement("h3");
			nombre.innerHTML = i +":"+ user.name;

			div_usuarios.appendChild(nombre);

			document.querySelector(".loading").style.display = 'none';
		});
}
function listadoUsuario(usuario){
	let nombre = document.createElement("h4");
	let avatar = document.createElement("img");

	nombre.innerHTML = usuario.first_name + " " + usuario.last_name;
	avatar.src = usuario.avatar;

	avatar.width = "100";

	div_usuario.appendChild(nombre);
	div_usuario.appendChild(avatar);

	document.querySelector("#usuario .loading").style.display = 'none';
}


function getInfo(){
	var	profesor = {
		nombre: 'Juan David',
		apellidos: 'Restrepo',
		url: 'www.prueba.com'
	};

	return new Promise((resolve, reject) =>{
		var profesor_string = JSON.stringify(profesor);

		if (typeof profesor_string != 'string') return reject("Error");

		return resolve(profesor_string);
	});
}
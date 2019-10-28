'use strict'

//JSON JavaScript Object Notation

var pelicula = {
	titulo: 'Batmas Vs SuperMan',
	year:   2017,
	pais: 'Estados unidos'
};

var peliculas = [
	{titulo: 'La verdad duele', year: '2018', pais: 'francia'},
	pelicula
];

var caja_peliculas = document.querySelector("#peliculas");

var index;
for(index in peliculas){
	var p = document.createElement("p");
	p.append(peliculas[index].titulo + " - " + peliculas[index].year);
	caja_peliculas.append(p);
}


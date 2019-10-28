var nombres = ["Carlos", "Juan", "Camilo", "Camila" ];



for (var i = 0; i < nombres.length ; i++) {
	document.write("<p1>" + nombres[i] +"</p1> <br></br>");
}


document.write("<ul>");

nombres.forEach((elemento, indice, arr)=>{
	console.log(arr);
	document.write("<li>" + indice + "-" + elemento +"</li>");
});

document.write("</ul>");

var categorias = ["Accion", "Terror", "Drama", "Comedia" ];
var peliculas   = ["La vida es bella", "El quinto elemento", "Amelie", "Memento" ];

var cine = [categorias, peliculas];

console.log(cine);
console.log(cine[0][0]);


for (let categoria in categorias) {
	document.write("<br>" + categorias[categoria] );
}
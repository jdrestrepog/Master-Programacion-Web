'use strict'

window.addEventListener('load',()=>{
	//Timers
	var tiempo = setInterval(function(){

		console.log("Set Interval ejecuatado");
		var encabezado = document.querySelector("h1");

		if (encabezado.style.fontSize == "50px")
			encabezado.style.fontSize = "20px";
		else
			encabezado.style.fontSize = "50px";
		
	}, 500);

	var stop = document.querySelector("#stop");

	stop.addEventListener('click', ()=>{
		alert("Intervalo detenido");
		clearInterval(tiempo);
	});

	var start = document.querySelector("#start");

	stop.addEventListener('click', ()=>{
		alert("Has iniciado el intervalo");
		clearInterval(tiempo);
	});

});
function informacion(e) {
	let dimensiones = tamañoVentanaNavegador();
	let x = e.cientY;
	let y = e.clientX;
	let posHorizontal = 'Derecha';
	let posVertical = 'Abajo';

	if (x < dimensiones[0]/2) {
		posHorizontal = 'Izquierda';
	}
	if (y < dimensiones[1]/2) {
		posVertical = 'Izquierda';
	}
	muestraInformacion([`Has fet click ${posHorizontal} ${posVertical}`]);
}

function muestraInformacion(mensaje) {
	document.getElementById("info").innerHTML = '<h1>'+mensaje[0]+'</h1>';
	for(let i=1; i<mensaje.length; i++) {
		document.getElementById("info").innerHTML += '<p>'+mensaje[i]+'</p>';
	}
}

function tamañoVentanaNavegador(){
	let dimensiones = [];
	
	if(typeof(window.innerWidth) == 'number') {
		// No es IE
		dimensiones = [window.innerWidth, window.innerHeight];
	} else if(document.documentElement && (document.documentElement.clientWidth || document.documentElement.clientHeight)) {
		//IE 6 en modo estandar (no quirks)
		dimensiones = [document.documentElement.clientWidth, document.documentElement.clientHeight];
	} else if(document.body && (document.body.clientWidth || document.body.clientHeight)) {
		//IE en modo quirks
		dimensiones = [document.body.clientWidth, document.body.clientHeight];
	}
	return dimensiones;
}

document.addEventListener("click", muestraInformacion);
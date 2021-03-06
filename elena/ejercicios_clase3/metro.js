/**
 * Hay varias formas de afrontar el problema, pero no habiendo atacado el tema de objetos aun 
 * lo desarrollaremos con arrays
 * 
 * Creamos un array, donde metemos direcamente el valor 'Funcionamiento' con un Booleano, es 
 * decir, si el tren funciona, ponemos un 'true', y si no funciona un 'false'
 */

var trenes = [true, true, true, false, false, false, false, false];

var i = 0;

while (trenes.length > i) {
    if (trenes[i] === true){
        console.log( "El tren número " + (i + 1) + " está funcionando");
    } else {
        console.log( "El tren número " + (i + 1) + " no está funcionando");

    }
    i++;
}

/** 
 * En la segunda parte del ejercicio se nos pide que imprimamos por consola el estado de cada tren 
 * en movimiento de manera individualizada... usando Do... While.
 */

var trenes = [true, true, true, false, false, false, false, false];

var i = 0;

do {  
	if (trenes[i] === true){
		console.log( "El tren número " + (i + 1) + " está funcionando");
	} else {
		console.log( "El tren número " + (i + 1) + " no está funcionando");
	}
	i++;
} while (trenes.length > i);


/**
 * En el tercer ejercisio se nos pide que imprimamos por consola el estado de cada tren en 
 * movimiento de manera individualizada... usando for.
 */

var trenes = [true, true, true, false, false, false, false, false];


for (let i = 0; i < trenes.length; i++) {
	if (trenes[i] === true){
		console.log( "El tren número " + (i + 1) + " está funcionando");
	} else {
		console.log( "El tren número " + (i + 1) + " no está funcionando");
	}
}

/**
 * En el cuarto ejercicio se nos pide que se agregue un Servicio nocturno en el tren 10. 
 * Nota: Frente al ejercicio anterior, en este caso queremos que siempre que hablemos del 
 * tren 10 se especifique que es nocturno. Independientemente de si esta parado o funcionando.
 * 
 * Planteo dos soluciones, en ambos casos el tren número 9 no existe:
 */

// Tan solo queremos monitorizar el tipo de tren que es el 10 (sin saber si funciona o no):

var trenes = [true, true, true, false, false, false, false, false, null, "Nocturno"];


for (let i = 0; i < trenes.length; i++) {
	if (trenes[i] === true){
		console.log( "El tren número " + (i + 1) + " está funcionando");
	} else if (trenes[i] === "Nocturno") {
			console.log( "El tren número " + (i + 1) + " no está funcionando y es nocturno");
	} else if (trenes[i] === null ) {
	console.log( "No hay tren número 9");
}	else {
		console.log( "El tren número " + (i + 1) + " no está funcionando");
	}
}

// Decimos que el tren 10 es nocturno y si funciona o no:

var trenes = [true, true, true, false, false, false, false, false, null, true];


for (let i = 0; i < trenes.length; i++) {
	if (trenes[i] === true && i !== 9){
		console.log( "El tren número " + (i + 1) + " está funcionando");
	} else if (i === 9 && trenes[i] ) {
			console.log( "El tren número " + (i + 1) + " está funcionando y es nocturno");
	} 
	else if (i=== 9 && !trenes[i] ) {
		console.log( "El tren número " + (i + 1) + " no está funcionando y es nocturno");
	}else if (trenes[i] === null ) {
	console.log( "No hay tren número 9");
}	else {
		console.log( "El tren número " + (i + 1) + " no está funcionando");
	}
}

/**
 * En el ejercicio 5 se nos dice: ¡Refactoricemos! ¿Y si todos los trenes están en las vías 
 * funcionando o por el contrario si ninguno de los trenes esta funcionando?.
 */


var trenes = [true, true, true, true, true, true, true, true, true];

function funcionan(tren) {
  return tren === true;
}


if (trenes.every(funcionan)) {
	console.log("Todos los trenes funcionan");
} else {
	console.log("No todos los trenes funcionan");
}

// Si no funciona ningún tren:

var noTrenes = [false, false, false, false, false, false, false, false, false];

function funcionan(tren) {
  return tren === false;
}


if (noTrenes.every(funcionan)) {
	console.log("Todos los trenes NO funcionan");
} else {
	console.log("Algún tren funciona");
}

/**
 * Sacado de MDN: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/every
 * 
 * function isBelowThreshold(currentValue) {
  return currentValue < 40;
}

var array1 = [1, 30, 39, 29, 10, 13];

console.log(array1.every(isBelowThreshold));
expected output: true

 */

/**
 * En el ejercicio 6 nos dice: El servicio nocturno se queda un poco corto y necesitamos añadir un nuevo 
 * tren de refuerzo. El 12 será destinado a cubrir esta necesidad, exactamente igual que el 10 anteriormente.
 */

var trenes = [true, true, true, false, false, false, false, false, null, true, null, true];


for (let i = 0; i < trenes.length; i++) {
	if (trenes[i] === true && i !== 9 && i !== 11) {
		console.log( "El tren número " + (i + 1) + " está funcionando");
	} else if (i === 9  && trenes[i] ) {
		console.log( "El tren número " + (i + 1) + " está funcionando y es nocturno");
	}	else if (i=== 9 && !trenes[i] ) {
		console.log( "El tren número " + (i + 1) + " no está funcionando y es nocturno");
	} else if (i === 11  && trenes[i] ) {		
		console.log( "El tren número " + (i + 1) + " está funcionando y es nocturno");
	} else if (i === 11 && !trenes[i] ) {
		console.log( "El tren número " + (i + 1) + " no está funcionando y es nocturno");
	}	else if (trenes[i] === null ) {
	console.log( "No hay tren número " + (i + 1));
}	else {
		console.log( "El tren número " + (i + 1) + " no está funcionando");
	}
}
// Quizas un switch... mejor jejeje


/**
 * En el ejercicio 7: 7 - El departamento de Marketing ha decidido lanzar un nuevo servicio los sábados. El "tren fiestero" será un tren adaptado a un público más intrépido y funcionará solo en los sábados. Este tren será el número 13.

NOTA: EL TREN 13 SOLO FUNCIONA LOS SÁBADOS. Es necesario incluir el día de la semana en tu código
 */


var trenes = [];


var today = new Date().getUTCDay()

if(today === 6) {
	trenes = [true, true, true, false, false, false, false, false, null, true, null, true, true];

} else {
	trenes = [true, true, true, false, false, false, false, false, null, true, null, true];
}

for (let i = 0; i < trenes.length; i++) {
	if (trenes[i] === true && i !== 9 && i !== 11 && i !== 12) {
		console.log( "El tren número " + (i + 1) + " está funcionando");
	} else if (i === 9  && trenes[i] ) {
		console.log( "El tren número " + (i + 1) + " está funcionando y es nocturno");
	}	else if (i=== 9 && !trenes[i] ) {
		console.log( "El tren número " + (i + 1) + " no está funcionando y es nocturno");
	} else if (i === 11  && trenes[i] ) {		
		console.log( "El tren número " + (i + 1) + " está funcionando y es nocturno");
	} else if (i === 11 && !trenes[i] ) {
		console.log( "El tren número " + (i + 1) + " no está funcionando y es nocturno");
	}	else if (trenes[i] === null ) {
	console.log( "No hay tren número " + (i + 1));
	}	else if (i === 12 && trenes[i] ) {
		console.log( "Este tren es el " + (i +1) + " y es el tren fiestero!!!");
	}	else {
			console.log( "El tren número " + (i + 1) + " no está funcionando");
	}
}

/**
 * En el ejercicio 8 nos dice: Hagamos una lista de pasajeros efectiva usando Arrays e imprimamos 
 * cada pasajero de la lista y su número de asiento (basado en el orden del índice). 
 * Nota: El primer asiento del tren es el 1 y no el 0.
 */

let pasajeros = [
	"Alicia Gutierrez",
	"Alfonso Gomez",
	"Luis Navarro",
	"Oscar Garcia",
	"Andres Fernandez",
	"Lucia Mellado"
];

for (let i = 0; i < pasajeros.length; i++) {
	const asiento = pasajeros[i];
	console.log(`El pasjero ${pasajeros[i]} se sienta en el asiento ${asiento}`)
}


/**
 * En el ejercicio 9 nos pide: 9 - Necesitamos una función para agregar 
 * y otra para borrar pasajeros de la lista. 
 * Nota: Pensemos que a la larga pueden existir más listas.
 */

var pasajeros = [
	"Alicia Gutierrez",
	"Alfonso Gomez",
	"Luis Navarro",
	"Oscar Garcia",
	"Andres Fernandez",
	"Lucia Mellado"
];

var agregarPasajero = function (pasajero, array) {
	array.push(pasajero)
}

var quitarPasajero = function (pasajero, array) {
	array.splice(pasajero, 1)
}

agregarPasajero("Manolo de los palotes", pasajeros)
quitarPasajero("Alicia Gutierrez", pasajeros)

/**
 * En el ejercicio 10 sigo sin darme el tinte... peeeero nos preguntan: 
 * La compañía de trenes ha decidido que los viajeros podrán reservar el asiento asignado, 
 * pero quieren evitar que los pasajeros cambien de asiento constantemente 
 * cuando se anula uno varios billetes. Nota: Al borrar en el ejercicio anterior 
 * las posiciones de los pasajeros cambiaban y los billetes quedaban desactualizados.
 */
var asientos = [
	"Alicia Gutierrez",
	"Alfonso Gomez",
	"Luis Navarro",
	"Oscar Garcia",
	"Andres Fernandez",
	"Lucia Mellado",
	"libre",
	"libre",
	"libre",
	"libre",
	"libre",
	"libre",
	"libre",
	"libre",
	"libre",
	"libre"
];

function asientoReservado(elemento) {
	return elemento != "libre";
}


var pasajeros = asientos.filter(asientoReservado);

console.log(pasajeros);


function agregarPasajero(pasajero, array){
	array.push(pasajero);
}

var quitarPasajero = function (pasajero, array) {
	pasajero = "libre"
}

function printPassengerList(){
	
	for (let i = 0; i < pasajeros.length; i++) {
			console.log("El pasajero " + pasajeros[i] + " tiene reservado el asiento " + (i+1));
	}
}


printPassengerList();

agregarPasajero("Pepito Grillo", pasajeros);

quitarPasajero("Alicia Gutierrez", pasajeros)

printPassengerList();
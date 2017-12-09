/*Escribir una función que dado un número X (base) y en número N */
function funcion (base,  exponente){
	var resultado=0;
	for (i=0;i<exponente ; i++){
		
		resultado= resultado*base;
	}
	return resultado;
}
var operacion = potencia(2,5);
console.log(operacion);
console.log(resultado);  //resultado is not defined


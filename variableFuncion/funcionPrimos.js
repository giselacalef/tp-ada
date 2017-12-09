/*escribir una funcion que, dado un numero
 pasado como parametro determine si es primo.*/

// CON FOR IF //
 var numero = process.argv[2];

 function primos(numero){
    var modulo=0;
   for(i=2; i < numero ;i++ ){
     modulo=numero%i;
     if(modulo==0){
      return false;
       }
   }
return true;
 }

 var ojota = primos (numero);
 console.log(ojota);
 
// function //
function primos (N){
	for (var i=N-1;i--){
		var x = N % i;
		if (x==0){

		}
	}

return true;
}

// function  con WHILE//
var i=2;

while (i>1 && i<numero){
  var x = numero%i;
  if (x == 0){
    return false;
  }
  i++;
}
return true;
console.log(primos(13));

// Funcion Do WHILE //
var i=2;
do{
  var x = numero%i;
  if (x == 0){
    return false;
  }
  i++;
}  while(i>1 && i<numero)

// PARA QUE FUNCIONE NOMBRAR LOS OTROS //

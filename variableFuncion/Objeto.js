var notas = ["do","mi","fa","sol"];

//metodos push y pop

var notasPush = notas.push ("la","si");
//notas.pop
//notas [4]="la";
//notas[5]="si";

console.log(notasPush);// 6
console.log(notas);
console.log("el valor que retorna push es igual al length del array" + (notasPush == notas.length))//true
 

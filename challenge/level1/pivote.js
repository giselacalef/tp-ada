
//ordenar de menor a mayor
// var arr=[8,32,5,10,1,22,7,30,20,11,3,9,45,40,26];
// var x=arr.length-1;
// console.log(arr.length) 
// var swap;
// for(x=arr.length;x>0;x--){

// for(i=0;i < x;i++){
// if(arr[i] > arr[x]){
//     swap = arr[x];
//     arr [x]= arr [i];
//     arr [i]=swap;
// }
// console.log(arr)
// }
// console.log(arr)
// }
// console.log(arr);
var arrDados=[5,4,3,2,1];
var x=arrDados.length-1;
// console.log(arrDados.length) 
var swap;
for(x=arrDados.length;x>0;x--){

for(i=0;i < x;i++){
if(arrDados[i] > arrDados[x]){
    swap = arrDados[x];
    arrDados [x]= arrDados [i];
    arrDados [i]=swap;
}
//console.log(arrDados);
}
//console.log(arrDados);
}
console.log('es escalera : ', arrDados);
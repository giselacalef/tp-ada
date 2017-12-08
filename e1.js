var arr=[3,8,10,2,5];///Ordenar de  mayor a menor
var p=2;// array.length/2
var swap;
for(i=0;i < p;i++){
if (arr[i] > arr[p]){
    swap=arr[p];
    arr [p]= arr [i];
    arr [i]=swap;
}
console.log(arr)
}
console.log(arr);
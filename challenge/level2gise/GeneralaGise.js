//////////////// Generar el aleatorio //////////
var arrDados = [];

arrDados[1] = Math.floor(Math.random()*5+1)+1;
arrDados[2] = Math.floor(Math.random()*5+1)+1;
arrDados[3] = Math.floor(Math.random()*5+1)+1;
arrDados[4] = Math.floor(Math.random()*5+1)+1;
arrDados[0] = Math.floor(Math.random()*5+1)+1;
console.log(arrDados);
function tirar (){
    for(var i = 0 ;i < 5; i++){
        arrDados = math.round(math.random  *5)+1;
        arrDados
    }
}

/////////////// Codigo Escalera///////////////

// var arrDados=[];
var i = 0;
var x=arrDados.length-1;
var swap;
for(x=arrDados.length;x>0;x--){
    if(arrDados[i] > arrDados[x]){
        swap = arrDados[x];
        arrDados [x]= arrDados [i];
        arrDados [i]=swap;
    }
    
}
console.log('es escalera : '+ arrDados);



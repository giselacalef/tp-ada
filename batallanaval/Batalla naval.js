var barcos = [
        [0,0,0,0,0,0,0,0,0],
        [0,0,0,0,0,0,0,0,0],
        [0,0,1,0,0,0,0,0,0],
        [0,0,0,0,0,0,0,0,0],
        [0,0,0,0,2,0,0,0,0],
        [0,0,0,0,2,0,0,0,0],
        [0,0,0,0,0,0,0,4,0],
        [0,0,3,3,3,0,0,4,0],
        [0,0,0,0,0,0,0,4,0],
        [0,0,0,0,0,0,0,4,0]]


var contHundidos=0;
var conT2=0;        
var contT3=0;
var contT4=0;

while(contHundidos<4){
  var x =promp("Ingrese una fila de 0 a 9");
  var y=promp ("Ingrese una columna de 0 a 9");
  if (barcos[x][y]== 0|| barcos [x][y])
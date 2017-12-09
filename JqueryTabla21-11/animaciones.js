var datos=[['Jaime','Perez',28],['Lalo','pirulo',32],['Joaquin','Burbuja',45]]; 
function cargar(){
	$('#tabla').html("");
	for (var i = 0; i < datos.length; i++) {
	//datos[i][0];
	
	var tr='<tr id="registro_'+i+'">'+'<td>'+datos[i][0]+'</td>'+'<td>'+datos[i][1]+'</td>'+'<td>'+datos[i][2]+'</td>'+
	'<td><button class="btnEditar" id="uno"data-rg = ".registro_'+i+'">'+'</button></td>'+
	'<td><button class="btnBorrar" id="1" data-rg = "registro_'+i+'">'+'</button></td></tr>';
	$('#tabla').append(tr);
	// var btnId=$(this).prop('id');
	// var trId= "#registro_'+i'"+ btnId;
	
	}
		}
$(document).ready(function(){
	cargar();
	



$('.btnEditar').on('click', function(){

$(this).addClass('clicked');
alert("Estas seguro que queres editar?")
});


$('.btnEditar').on('click', function(){
var btnId= $(this).attr('id');
alert("Boton" + btnId);




});
$('.btnEditar').on('click', function(){
var fila= $(this).data('rg');//.registro_3
$(fila).prop("disabled", false);
});


$('.btnBorrar').on('click', function(){
var btnId=$(this).prop('id');
var trId= "#registro_"+ btnId;
$(trId).hide(1000,function(){
alert("se borro");

});


});

$('#add').on ('click',function(){

var tr= '<tr id="registro_4">'+'<td><input type="text" value="Name" class="registro_3" disabled </td>'+
'<td><input type="text" value="Lastname" class="registro_3" disabled></td>'+'<td><input type="text" value="Age" class="registro_3" disabled ></td>'+
'<td><button class="btnEditar" id="tres"data-rg = ".registro_3">■</button></td>'+'<td><button class="btnBorrar" id="3"data-rg = "registro_3">■</button></td></tr>'
//$()$
$('#tabla').append(tr);

});
$('#btnArr').on('click',function(){
	var nuevo=[];
	var registroNN=$('#NN').val();
	nuevo.push(registroNN);
	var registroLN=$('#LN').val();
	nuevo.push(registroLN);
	var registroAG=$('#AG').val();
	nuevo.push(registroAG);
	datos.push(nuevo);
	console.log(nuevo);
	console.log(datos);
})


});
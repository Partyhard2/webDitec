function respuesta(){
	if(document.getElementById("respuesta1").innerHTML==""){
		document.getElementById("respuesta1").innerHTML="Respuesta1";
		document.getElementsByClassName("mostrar").innerHTML="(Ocultar respuesta)";
	}else {
		document.getElementById("respuesta1").innerHTML="";
		document.getElementsByClassName("mostrar").innerHTML="(Mostrar respuesta)";
	}
}
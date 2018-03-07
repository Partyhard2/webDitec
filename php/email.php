<?php
	$destino = $_POST['bporcel17@jaumebalmes.net'];
	$asunto = $_POST['asunto'];
	$texto = $_POST['texto'];
	if(mail($destino,$asunto,$texto)){
		echo "Mail Enviado con exito!";
	}else{
		echo "Ha habido un error :/";
	}
?>
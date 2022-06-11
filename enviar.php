<?php

//Llamando a los campos del form=================================
$nombre = $_POST['nombre'];
$telefono = $_POST['telefono'];
$correo = $_POST['correo'];
$mensaje = $_POST['mensaje'];

//Datos para el Correo==========================================
$destinatario = "hnansaldi@gmail.com";
$asunto = "Contacto desde Web";

$carta = "De: + $nombre \n";
$carta .= "Correo: + $correo \n";
$carta .= "Telefono: + $telefono \n";
$carta .= "Mensaje: + $mensaje";

//Enviando el mensaje / correo===================================
mail($destinatario, $asunto, $carta);
header('Location:mensajeEnvio.html');
?>
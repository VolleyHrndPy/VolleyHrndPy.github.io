<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $nombre = $_POST["nombre"];
    $email = $_POST["email"];
    $asunto = $_POST["asunto"];
    $mensaje = $_POST["mensaje"];

    $destinatario = "volleyhawksofc@gmail.com";  // Reemplaza esto con tu dirección de correo electrónico
    $asunto_correo = "Nuevo mensaje de Volley Hawks Club";

    $contenido_correo = "Nombre: $nombre\n";
    $contenido_correo .= "Email: $email\n";
    $contenido_correo .= "Asunto: $asunto\n";
    $contenido_correo .= "Mensaje:\n$mensaje";

    mail($destinatario, $asunto_correo, $contenido_correo);

    // Puedes redirigir a una página de confirmación si lo deseas
    header("Location: confirmacion.html");
    exit();
}
?>

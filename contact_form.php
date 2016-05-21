<?php
// Fetching Values from URL.
$name = $_POST['name1'];
$email = $_POST['email1'];
$phone = $_POST['phone1'];
$app = $_POST['app1'];
$web = $_POST['web1'];
$control = $_POST['control1'];
$message = $_POST['message1'];
$date = $_POST['date1'];
$time= $_POST['time1'];
$email = filter_var($email, FILTER_SANITIZE_EMAIL); // Sanitizing E-mail.
// After sanitization Validation is performed
if (filter_var($email, FILTER_VALIDATE_EMAIL)) {
$subject = $name;
// To send HTML mail, the Content-type header must be set.
$headers = 'MIME-Version: 1.0' . "\r\n";
$headers .= 'Content-type: text/html; charset=iso-8859-1' . "\r\n";
$headers .= 'From:' . 'info@forceclose.pe' . "\r\n"; // Sender's Email
$headers .= 'Cc:' . $email. "\r\n"; // Carbon copy to Sender
$template = '<div style="padding:50px; color:white;">Hola ' . $name . ',<br/>'
. '<br/>¡Gracias por contactarnos!.<br/><br/>'
. 'Nombre:' . $name . '<br/>'
. 'Correo:' . $email . '<br/>'
. 'Número de contacto:' . $phone . '<br/><br/>'
. '¿Qué servicio deseas?: <br/>'
. 'Aplicaciones móviles:' . $app . '<br/>'
. 'Desarrollo web:' . $web . '<br/>'
. 'Control de acceso:' . $control . '<br/>'
. 'Mensaje:' . $message . '<br/>'
. 'Deseas agendar una reunipon el' . $date . 'a las' . $time . '<br/><br/>'
. 'Este es un correo de confirmación de envío.'
. '<br/>'
. 'Nos estaremos comunicando contigo lo antes posible.</div>';
$sendmessage = "<div style=\"background-color:#7E7E7E; color:white;\">" . $template . "</div>";
// Message lines should not exceed 70 characters (PHP rule), so wrap it.
$sendmessage = wordwrap($sendmessage, 70);
// Send mail by PHP Mail Function.
mail("info@forceclose.pe", $subject, $sendmessage, $headers);
echo "Tu correo ha sido enviado, nos contactaremos contigo pronto.";
} else {
echo "<span>* Correo inválido *</span>";
}
?>
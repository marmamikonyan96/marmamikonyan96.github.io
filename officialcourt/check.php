<?php
print_r ($_POST);
$email = $_POST['email'];
$message = $_POST ['message'];

$error = '';
if(trim($email) == '');
 $error = 'Լրացրեք հարթակը';

 $subject = "=?utf-8?B?" .base64_encode("Նամակ")."?=";
 $headers = "From: $email\r\nReply-to: $email\r\nContent-type: text/html;charset = utf-8\r\n";

 mail('civilcourt.am@gmail.com', $subject, $message, $headers);

 header('Location: /index.php')
?>

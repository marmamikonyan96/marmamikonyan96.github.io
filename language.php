<?php 
error_reporting(-1);
ini_set('display_errors',1);
header('Content - Type: text/html');
$page = (isset($_GET['page']) ? $_GET['page'] :'index.php');

exit(var_dump($_SERVER['HTTP_ACCEPT_LANGUAGE']));
?>
<?php include "blocks/header.php"?>
<?php include "blocks/main.php"?>
<?php include "blocks/footer.php"?>

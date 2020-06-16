<?php 
error_reporting(-1);
ini_set('display_errors',1);
header('Content - Type: text/html');
$page = (isset($_GET['page']) ? $_GET['page'] :'index.php');

?>
<?php include "blocks/header.php"?>




<div class="fifth_page">
    <article>
        <div class="f_title">
            <h5> Արդարադատության արդյունավետության բարձրացման հայեցակարգային մոտեցումներ </h5>
        </div>
        <div class="f_link">
            <a href="pdf/Monitoring.pdf"> ԱՐԴԱՐԱԴԱՏՈՒԹՅԱՆ ԱՐԴՅՈՒՆԱՎԵՏՈՒԹՅԱՆ ԲԱՐՁՐԱՑՄԱՆ ՀԱՅԵՑԱԿԱՐԳԱՅԻՆ ՄՈՏԵՑՈՒՄՆԵՐ</a>
        </div>
    </article>
</div>
<?php include "blocks/main.php"?>
<?php include "blocks/footer.php"?>

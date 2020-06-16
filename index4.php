<?php 
error_reporting(-1);
ini_set('display_errors',1);
header('Content - Type: text/html');
$page = (isset($_GET['page']) ? $_GET['page'] :'index.php');

?>
<?php include "blocks/header.php"?>
<div class="fourth_page">
    <article>
        <h5>ԴԽԵՄ Լիսաբոնի հռչակագիր 2018</h5>
        <p class="date"> 26 հունիսի 2018թ.</p>
        <a href="pdf/Լիսաբոնի_հռչակագիր.pdf"> ԼԻՍԱԲՈՆԻ ՀՌՉԱԿԱԳԻՐԸ ԴՐԱԿԱՆ ՓՈՓՈԽՈՒԹՅԱՆ ԱՌԱՋՆՈՐԴՄԱՆ ՎԵՐԱԲԵՐՅԱԼ</a>
    </article>
</div>
<?php include "blocks/main.php"?>
<?php include "blocks/footer.php"?>

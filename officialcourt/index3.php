<?php 
error_reporting(-1);
ini_set('display_errors',1);
header('Content - Type: text/html');
$page = (isset($_GET['page']) ? $_GET['page'] :'index.php');

?>
<?php include "blocks/header.php"?>


<div class="third_page">
    <div class="third_content">
        <article>
            <h5> Դատավորների անկախության եվրոպական չափորոշիչներ</h5>
            <p class="date"> 20 ապրիլի 2018թ</p>
            <a href="pdf/mas1.pdf">Ի ԳԻՏՈՒԹՅՈՒՆ ԴԱՏԱՎՈՐՆԵՐԻ ԵՎ ԴԱՏԱՎՈՐԻ ԹԵԿՆԱԾՈՒՆԵՐԻ ՀԱՎԱԿՆՈՐԴՆԵՐԻ</a>
        </article>
    </div>
</div>
<?php include "blocks/main.php"?>
<?php include "blocks/footer.php"?>

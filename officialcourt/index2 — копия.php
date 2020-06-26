<?php 
error_reporting(-1);
ini_set('display_errors',1);
header('Content - Type: text/html');
$page = (isset($_GET['page']) ? $_GET['page'] :'index.php');

?>
<?php include "blocks/header.php"?>
<div class="second_page">
    <div class="second_content">
        <article>
            <h5>Ի գիտություն դատավորների</h5>
            <p class="date">25 ապրիլի 2018թ.</p>
            <a href="pdf/Ի_գիտություն_դատավորների_և_դատավորի_թեկնածուների_հավակնորդների.pdf">Ի ԳԻՏՈՒԹՅՈՒՆ ԴԱՏԱՎՈՐՆԵՐԻ ԵՎ
                ԴԱՏԱՎՈՐԻ <br />
                ԹԵԿՆԱԾՈՒՆԵՐԻ ՀԱՎԱԿՆՈՐԴՆԵՐԻ</a>
        </article>
    </div>
</div>
<?php include "blocks/main.php"?>
<?php include "blocks/footer.php"?>

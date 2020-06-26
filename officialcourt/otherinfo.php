<?php 
error_reporting(-1);
ini_set('display_errors',1);
header('Content - Type: text/html');
$page = (isset($_GET['page']) ? $_GET['page'] :'index.php');

?>
<?php include "blocks/header.php"?>
<section class="info">
    <div class="container">
        <div class="info_menu">
            <nav class="inf">
                <div class="info_items">
                    <ul>
                        <li>
                            <a href="">ՀՀ Դատարաններ</a>
                        </li>
                    </ul>
                    <div class="submenu">
                        <ul>
                            <li><a href="vchrabek.php">Վճռաբեկ դատարան</a></li>
                            <li><a href="veraqnnich.php">Վերաքննիչ դատարաններ</a></li>
                            <li><a href="adresses.php">Դատարանների հասցեներ և հեռախոսահամարներ</a></li>
                        </ul>
                    </div>
                </div>
                <div class="info_items">
                    <ul>
                        <li>
                            <a href="links.php">Հղումներ</a>
                        </li>
                    </ul>
                </div>
            </nav>
        </div>
</section>
<?php include "blocks/main.php"?>
<?php include "blocks/footer.php"?>

<?php 
error_reporting(-1);
ini_set('display_errors',1);
header('Content - Type: text/html');
$page = (isset($_GET['page']) ? $_GET['page'] :'index.php');

?>
<?php include "blocks/header.php"?>
<section class="lib">
    <div class="lib_items">
        <div class="flex_item">
            <div class="title">
                <h6>Իրավական ռեսուրսներ</h6>
            </div>
            <div class="type_files">
                <ol>
                    <li><a href="pdf/literature.pdf">Թեմատիկ գրականության ցանկ</a></li>
                    <li><a href="https://www.echr.coe.int/Pages/home.aspx?p=home">Մարդու իրավունքների եվրոպական դատարանի
                            որոշումներ</a></li>
                    <li><a href="http://www.codices.coe.int/NXT/gateway.dll?f=templates&fn=default.htm">The InfoBase on
                            Constitutional Case-Law of the Venice Commission (CODICES)</a></li>
                    <li><a href="http://courteurasian.org/">Суд Евразийского экономического союза</a></li>
                    <li><a href="http://www.datalex.am/">Դատական տեղեկատվական համակարգ (DataLex)</a></li>
                </ol>
            </div>
        </div>
        <div class="flex_item">
            <div class="title">
                <h6>Էլեկտրոնային գրադարան</h6>
            </div>
            <div class="type_files">
                <ol>
                    <li><a href="pdf/Эволюция.pdf">ЭВОЛЮЦИЯ АДМИНИСТРАТИВНОГО ПРАВА В РЕСПУБЛИКЕ АРМЕНИЯ</a></li>

                </ol>
            </div>
        </div>
        <div class="flex_item">
            <div class="title">
                <h6>ՀՀ Օրենսգրքեր</h6>
            </div>
            <div class="type_files">
                <ol>
                    <li><a href="orensgrqer/ashxatanqayin orensg.pdf">ՎԱՐՉԱԿԱՆ ԻՐԱՎԱԽԱԽՏՈՒՄՆԵՐԻ ՎԵՐԱԲԵՐՅԱԼ ՀԱՅԱՍՏԱՆԻ
                            ՀԱՆՐԱՊԵՏՈՒԹՅԱՆ ՕՐԵՆՍԳԻՐՔ</a></li>
                    <li><a href="orensgrqer/150003.pdf">ՀԱՅԱՍՏԱՆԻ ՀԱՆՐԱՊԵՏՈՒԹՅԱՆ ՔԱՂԱՔԱՑԻԱԿԱՆ ՕՐԵՆՍԳԻՐՔ+</a></li>
                    <li><a href="orensgrqer/qreakan.pdf">ՀԱՅԱՍՏԱՆԻ ՀԱՆՐԱՊԵՏՈՒԹՅԱՆ
                            ՔՐԵԱԿԱՆ ԴԱՏԱՎԱՐՈՒԹՅԱՆ ՕՐԵՆՍԳԻՐՔ</a></li>
                    <li><a href="orensgrqer/qreakan orensgirq.pdf">ՀԱՅԱՍՏԱՆԻ ՀԱՆՐԱՊԵՏՈՒԹՅԱՆ
                            ՔՐԵԱԿԱՆ ՕՐԵՆՍԳԻՐՔ</a></li>
                    <li><a href="orensgrqer/մաքսային.pdf">ՀԱՅԱՍՏԱՆԻ ՀԱՆՐԱՊԵՏՈՒԹՅԱՆ ՄԱՔՍԱՅԻՆ ՕՐԵՆՍԳԻՐՔ</a></li>
                    <li><a href="orensgrqer/հողային.pdf">ՀԱՅԱՍՏԱՆԻ ՀԱՆՐԱՊԵՏՈՒԹՅԱՆ
                            ՀՈՂԱՅԻՆ ՕՐԵՆՍԳԻՐՔ</a></li>
                    <li><a href="orensgrqer/ջրային.pdf">ՀԱՅԱՍՏԱՆԻ ՀԱՆՐԱՊԵՏՈՒԹՅԱՆ
                            ՋՐԱՅԻՆ ՕՐԵՆՍԳԻՐՔ</a></li>
                    <li><a href="orensgrqer/ընտանեկան.pdf">ՀԱՅԱՍՏԱՆԻ ՀԱՆՐԱՊԵՏՈՒԹՅԱՆ
                            ԸՆՏԱՆԵԿԱՆ ՕՐԵՆՍԳԻՐՔ</a></li>
                    <li><a href="orensgrqer/քրեակատարողական.pdf">ՀԱՅԱՍՏԱՆԻ ՀԱՆՐԱՊԵՏՈՒԹՅԱՆ
                            ՔՐԵԱԿԱՏԱՐՈՂԱԿԱՆ ՕՐԵՆՍԳԻՐՔ</a></li>
                    <li><a href="orensgrqer/անտառային.pdf">ՀԱՅԱՍՏԱՆԻ ՀԱՆՐԱՊԵՏՈՒԹՅԱՆ ԱՆՏԱՌԱՅԻՆ ՕՐԵՆՍԳԻՐՔ</a></li>
                    <li><a href="orensgrqer/ընդերք.pdf">ՀԱՅԱՍՏԱՆԻ ՀԱՆՐԱՊԵՏՈՒԹՅԱՆ ԸՆԴԵՐՔԻ ՄԱՍԻՆ ՕՐԵՆՍԳԻՐՔ</a></li>
                    <li><a href="orensgrqer/վարչական դատավարություն.pdf">ՀԱՅԱՍՏԱՆԻ ՀԱՆՐԱՊԵՏՈՒԹՅԱՆ ՎԱՐՉԱԿԱՆ ԴԱՏԱՎԱՐՈՒԹՅԱՆ
                            ՕՐԵՆՍԳԻՐՔ</a></li>
                    <li><a href="orensgrqer/հարկային.pdf">ՀԱՅԱՍՏԱՆԻ ՀԱՆՐԱՊԵՏՈՒԹՅԱՆ ՀԱՐԿԱՅԻՆ ՕՐԵՆՍԳԻՐՔ </a></li>
                    <li><a href="orensgrqer/դատական.pdf">ՀԱՅԱՍՏԱՆԻ ՀԱՆՐԱՊԵՏՈՒԹՅԱՆ ԴԱՏԱԿԱՆ ՕՐԵՆՍԳԻՐՔ </a></li>
                    <li><a href="orensgrqer/քաղաքացիական դատավարություն.pdf">ՀԱՅԱՍՏԱՆԻ ՀԱՆՐԱՊԵՏՈՒԹՅԱՆ
                            ՔԱՂԱՔԱՑԻԱԿԱՆ ԴԱՏԱՎԱՐՈՒԹՅԱՆ ՕՐԵՆՍԳԻՐՔ </a></li>
                </ol>
            </div>
        </div>
    </div>
</section>


<?php include "blocks/main.php"?>
<?php include "blocks/footer.php"?>

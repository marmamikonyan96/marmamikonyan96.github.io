<?php 
error_reporting(-1);
ini_set('display_errors',1);
header('Content - Type: text/html');
$page = (isset($_GET['page']) ? $_GET['page'] :'index.php');

?>
<?php include "blocks/header.php"?>
<div class="content_inform">
    <div class="container">
        <div class="adresses_title">
            <h5>Դատարանի հասցեներ, հեռախոսահամարներ
            </h5>
        </div>
        <div class="flex">
            <div class="adress_wrap">
                <div class="court">
                    <h6>ՀՀ վճռաբեկ դատարան</h6>
                </div>
                <div class="inform_contact">
                    <p>Հասցե՝ ք. Երևան, Վազգեն Սարգսյան 5<br>
                        hեռ.՝ 511-740<br>
                        Քրեական պալատի գրասենյակ<br>
                        հեռ.՝ 511-745<br>
                        Քաղաքացիական և վարչական պալատի գրասենյակ<br>
                        հեռ.՝ 511-735
                    </p>
                </div>
            </div>
            <div class="adress_wrap">
                <div class="court">
                    <h6>ՀՀ վերաքննիչ քրեական դատարան</h6>
                </div>
                <div class="inform_contact">
                    <p>Հասցե՝ ք. Երևան, Գ. Նժդեհի 23<br>
                        հեռ.՝ 44-88-94 (104,106,153)
                    </p>
                </div>
            </div>
            <div class="adress_wrap">
                <div class="court">
                    <h6>ՀՀ վերաքննիչ քաղաքացիական դատարան</h6>
                </div>
                <div class="inform_contact">
                    <p>Հասցե՝ ք. Երևան, Գ. Նժդեհի 23<br>
                        հեռ.՝ 44-84-08 (306,307,359)
                    </p>
                </div>
            </div>
            <div class="adress_wrap">
                <div class="court">
                    <h6>ՀՀ վարչական վերաքննիչ դատարան</h6>
                </div>
                <div class="inform_contact">
                    <p>Հասցե՝ ք. Երևան, Թբիլիսյան խճուղի 3/9<br>
                        հեռ.՝ 20-11-95

                    </p>
                </div>
            </div>
            <div class="adress_wrap">
                <div class="court">
                    <h6>ՀՀ վարչական դատարան</h6>
                </div>
                <div class="inform_contact">
                    <p>Հասցե՝ ք. Երևան, Գ. Նժդեհի 23<br>
                        հեռ.՝ 44-71-21 (230)
                    </p>
                </div>
            </div>
            <div class="adress_wrap">
                <div class="court">
                    <h6>ՀՀ սնանկության դատարան</h6>
                </div>
                <div class="inform_contact">
                    <p>Հասցե՝ ք. Երևան, Օտյան փողոց 53/2<br>
                        հեռ.՝ 74-29-10
                        74-59-50<br>
                    </p>
                </div>
            </div>
            <div class="adress_wrap">
                <div class="adresses_title">
                    <h6>Երևան քաղաքի ընդհանուր իրավասության դատարան
                    </h6>
                </div>
                <div class="court">
                    <h6>
                        Կենտրոն նստավայր</h6>
                </div>
                <div class="inform_contact">
                    <p>Հասցե՝ ք. Երևան, Տիգրան Մեծի 23/1<br>
                        հեռ.՝ 54-79-15<br>
                        54-79-17
                    </p>
                </div>
                <div class="adress_wrap">
                    <div class="court">
                        <h6>
                            Ավան նստավայր</h6>
                    </div>
                    <div class="inform_contact">
                        <p>Հասցե՝ ք. Երևան, Գյուլիքևխվյան 20<br>
                            հեռ.՝ 64-94-65
                        </p>
                    </div>
                </div>
                <div class="adress_wrap">
                    <div class="court">
                        <h6>
                            Շենգավիթ նստավայր
                        </h6>
                    </div>
                    <div class="inform_contact">
                        <p>Հասցե՝ ք. Երևան, Արշակունյաց պողոտա 24/1<br>
                            հեռ.՝ 44-14-30
                        </p>
                    </div>
                </div>
                <div class="adress_wrap">
                    <div class="court">
                        <h6>
                            Էրեբունի նստավայր</h6>
                    </div>
                    <div class="inform_contact">
                        <p>Հասցե՝ ք. Երևան, Մովսես Խորենացի 162ա<br>
                            հեռ.՝ 57-75-84
                        </p>
                    </div>
                </div>
                <div class="adress_wrap">
                    <div class="court">
                        <h6>
                            Արաբկիր նստավայր</h6>
                    </div>
                    <div class="inform_contact">
                        <p>Հասցե՝ ք. Երևան, Հրաչյա Ներսիսյան 10<br>
                            հեռ.՝ 24-08-31
                        </p>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>

<?php include "blocks/main.php" ?>
<?php include "blocks/footer.php"?>

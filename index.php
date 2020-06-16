<?php 
error_reporting(-1);
ini_set('display_errors',1);
header('Content - Type: text/html');
$page = (isset($_GET['page']) ? $_GET['page'] :'main');
?>

<!DOCTYPE html>
<html lang="en">

    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
        <title>Քաղաքացիական դատարան</title>



        <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.5.0/css/bootstrap.min.css"
            integrity="sha384-9aIt2nRpC12Uk9gS9baDl411NQApFmC26EwAOH8WgZl5MYYxFfc+NcPb1dKGj7Sk" crossorigin="anonymous">
        <link
            href="https://fonts.googleapis.com/css2?family=Arima+Madurai:wght@400;500;700&family=Montserrat:wght@400;700&display=swap"
            rel="stylesheet">
        <link rel="stylesheet" href="css/main.css">

        <script src="js/main.js"></script>
        <script src="js/jquery-3.5.1.min.js"></script>
        <script src="https://kit.fontawesome.com/18ed7b61f4.js" crossorigin="anonymous"></script>
        <script src="https://code.jquery.com/jquery-3.5.1.slim.min.js"
            integrity="sha384-DfXdz2htPH0lsSSs5nCTpuj/zy4C+OGpamoFVy38MVBnE+IbbVYUew+OrCXaRkfj" crossorigin="anonymous">
        </script>
        <script src="https://cdn.jsdelivr.net/npm/popper.js@1.16.0/dist/umd/popper.min.js"
            integrity="sha384-Q6E9RHvbIyZFJoft+2mJbHaEWldlvI9IOYy5n3zV9zzTtmI3UksdQRVvoxMfooAo" crossorigin="anonymous">
        </script>
        <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.5.0/js/bootstrap.min.js"
            integrity="sha384-OgVRvuATP1z7JjHLkuOU7Xw704+h835Lr+6QL9UvYjZE3Ipu6Tp75j7Bh/kR0JKI" crossorigin="anonymous">
        </script>
    </head>

    <body>

        <div class="fixed-top">
            <header id="myHeader">
                <div class="web_head">
                    <div class="h_flag">
                        <img src="img/flag.png" alt="flag">
                    </div>
                    <div class="h_title">
                        <h2>ՔԱՂԱՔԱՑԻԱԿԱՆ ԴԱՏԱՐԱՆ</h2>
                        <h6>ՊԱՇՏՈՆԱԿԱՆ ԿԱՅՔ</h6>
                    </div>
                    <div class="logo">
                        <img src="img/title.png" alt="logo">
                    </div>
                </div>
                <div class="header_content">
                    <div class="simple">

                        <ul>
                            <li><a href="index.php"><i class="fas fa-home"></i></a></li>
                            <li>
                                <?php
                                    echo " " . date("Y/m/d") . "<br>";
                                ?>
                            </li>

                        </ul>
                        <div class="language">
                            <ul>
                                <li><a href="index.php"><img src="img/am.png" alt=""></a></li>
                                <li><a href="language.php"><img src="img/ru.png" alt=""></a></li>
                            </ul>
                        </div>
                    </div>
                    <div class="container">
                        <div class="header_menu">
                            <div class="menu_item">
                                <ul>
                                    <li>
                                        <a href="">Պաշտոնական Հայտարարություններ</a>
                                    </li>
                                </ul>
                                <div class="submenu">
                                    <ul>
                                        <li><a href="#">Դատարանի նախագահի հայտարարություններ</a></li>
                                        <li><a href="#">Դատարանների կողմից տրվող հայտարարություններ</a></li>
                                        <li><a href="otherinfo.php">Այլ Տեղեկատվություն</a></li>
                                    </ul>
                                </div>
                            </div>

                            <div class="menu_item">
                                <ul>
                                    <li>
                                        <a href="">Դատարանի Փաստաթղթեր</a>
                                    </li>
                                </ul>
                                <div class="submenu">
                                    <ul>
                                        <li><a href="pdf/Քաղաքացիական դատարանի կանոնակարգ.pdf">Քաղաքացիական դատարանի
                                                կանոնակարգ</a></li>
                                        <li><a href="pdf/Քաղաքացիական դատարանի կանոնադրություն.pdf">Դատարանի
                                                Կանոնադրություն</a></li>
                                    </ul>
                                </div>
                            </div>
                            <div class="menu_item ">
                                <ul>
                                    <li>
                                        <a href="contact.php">Հետադարձ կապ</a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
            </header>
        </div>
        <section id="main">
            <div class="container">
                <div class="wrap">
                    <div class="left_content">
                        <div class="news">
                            <ul>
                                <li><a href="news.php">Նորություններ </a></li>
                                <li><a href="library.php">Գրադարան </a> </li>
                                <li><a href="international.php">Միջազգային<br> Համագործակցություն </a></li>
                                <li><a href="raiting.php">Ռեյտինգներ</a></li>
                            </ul>
                        </div>

                        <div class="media_news">
                            <div class="n_title">
                                <h6>ՄԵԴԻԱ</h6>
                            </div>
                            <div class="feedback">
                                <img src="img/media.png" alt="">
                            </div>
                            <div class="media_title">
                                <a
                                    href="https://www.youtube.com/watch?v=eN0l_UWcrm4&feature=youtu.be&fbclid=IwAR3TnTyqdlSoyRms6wgZx9ZX4yTDYgAXqiTp_fV5A7E0UujuGraeTblIOT4">
                                    Դատավորի դեմ կատարվածը նախադեպ դառնալ չի կարող. ԲԴԽ անդամ</a>
                            </div>
                        </div>
                        <div class="content_map">
                            <!--<div id="map"></div>-->
                            <iframe
                                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3048.5401834784966!2d44.51530561538863!3d40.174790379393954!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x406abcf7291fc275%3A0xd4d4d6244947f8df!2s34%20Chaykovski%20St%2C%20Yerevan%200010!5e0!3m2!1sru!2s!4v1590765213461!5m2!1sru!2s"
                                width="100%" height="100%" frameborder="0" style="border:0;" allowfullscreen=""
                                aria-hidden="false" tabindex="0"></iframe>
                        </div>
                        <form action="http://www.google.com/search" method="get" target="_blank">
                            <input type="hidden" value="UTF-8" name="ie">
                            <input type="hidden" value="UTF-8" name="oe">
                            <input type="hidden" value="en" name="hl">
                            <input name="sitesearch" type="hidden" value="http://քաղաքացիականդատարան.com">
                            <table width="180" border="0" align="center" cellpadding="0" cellspacing="0">
                                <tbody>
                                    <tr>
                                        <td width="200" align="left" valign="middle">
                                            <input name="q" class="searchline" size="25" maxlength="210">
                                        </td>
                                        <td>
                                            <div align="center">
                                                <div align="center">
                                                    <input name="image" type="image" class="go" align="center"
                                                        src="img/go.gif" width="20" height="29" align="middle"
                                                        border="0">
                                                </div>
                                            </div>
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                        </form>
                    </div>
                    <div class="president">
                        <div class="title">
                            <h3>Դատարանի նախագահ</h3>
                        </div>
                        <div class="img">
                            <img src="img/judge.jpg" alt="">
                        </div>
                        <div class="name">
                            <p>Արմեն Հովիկի Մամիկոնյան</p>
                        </div>
                        <div class="cv">
                            <ul>
                                <li><a href="#">Ելույթներ</a></li>
                                <li><a href="#">Հրապարակումներ</a></li>
                            </ul>
                        </div>
                    </div>
                    <div class="right_content">
                        <div class="statement">
                            <div class="menu_right">
                                <ul>
                                    <li><a href="#"> Դատական Իշխանության ծախսեր </a></li>
                                </ul>
                            </div>
                            <div class="menu_right">
                                <ul>
                                    <li><a href="#"> Դատական Գործեր </a></li>
                                </ul>
                            </div>
                            <div class="menu_right">
                                <ul>
                                    <li><a href="#"> Էլեկտրոնային Փաստաթղթեր </a></li>
                                </ul>
                                <div class="submenu_right">
                                    <ul>
                                        <li><a href="#">էլեկտրոնային հայցադիմումներ</a></li>
                                        <li><a href="#">Այլ դատավարական փաստաթղթեր</a></li>
                                    </ul>
                                </div>
                            </div>
                            <div class="menu_right">
                                <ul>
                                    <li><a href="#">Դատական պրակտիկայի հարցերի պարզաբանումները, ամփոփումները և
                                            կարծիքները </a></li>
                                </ul>
                            </div>
                            <div class="menu_right">
                                <ul>
                                    <li><a href="#">Դատական գործերի ժամանակացույց </a></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <section class="global">
            <div class="container">
                <div class="legal_wrap">
                    <div class="europetype">
                        <div class="iconeu">
                            <img src="img/eu.png" alt="europe">
                        </div>
                        <div class="g_title">
                            <a href="index3.php">Դատավորների անկախության եվրոպական չափորոշիչներ</a>
                        </div>
                    </div>
                    <div class="europetype">
                        <div class="iconeu">
                            <img src="img/murch.png" alt="europe">
                        </div>
                        <div class="g_title">
                            <a href="index2.php">Ի գիտություն դատավորների</a>
                        </div>
                    </div>
                    <div class="europetype">
                        <div class="g_title">
                            <a href="index4.php">ԴԽԵՄ Լիսաբոնի հռչակագիր 2018</a>
                        </div>
                    </div>
                    <div class="europetype">
                        <div class="g_title">
                            <a href="index5.php">Արդարադատության Արդյունավետության Բարձրացման Հայեցակարգային
                                Մոտեցումներ</a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <footer class="footer">
            <div class="container">
                <div class="footer_wrap">
                    <div class="panel-content">
                        <!-- hitwebcounter Code START -->
                        <a href="https://www.hitwebcounter.com" target="_blank">
                            <img src="https://hitwebcounter.com/counter/counter.php?page=7283819&style=0006&nbdigits=9&type=page&initCount=0"
                                title="User Stats" Alt="PHP Hits Count" border="0">
                        </a>
                    </div>
                    <div class="f_adress">
                        <h5>Հասցե</h5>
                        <p>
                            Հայաստանի Հանրապետություն<br> Չայկովսկու 34
                        </p>
                    </div>
                    <div class="f_contact">
                        <h5>Էլ. Հասցե</h5>
                        <p>civilcourt.am@gmail.com</p>
                    </div>
                </div>
            </div>
        </footer>
    </body>

</html>

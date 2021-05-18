<?php 
error_reporting(-1);
ini_set('display_errors',1);
header('Content - Type: text/html');
$page = (isset($_GET['page']) ? $_GET['page'] :'main');
?>


<!DOCTYPE html>
<html lang="ru">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <meta name="apple-mobile-web-app-capable" content="yes">
    <meta name="apple-mobile-web-app-status-bar-style" content="black">
    <meta name = "viewport" content = "width = 320,
       initial-scale = 2.3, user-scalable = no">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1">
    <meta http-equiv="cleartype" content="on">
    <meta http-equiv="msthemecompatible" content="no">

    <title>Мелик Танкян адвокатская контора</title>
    <link rel="stylesheet" href="css/main.css" />
    <link href="https://unpkg.com/aos@2.3.1/dist/aos.css" rel="stylesheet">
    <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.7.0/css/all.css" integrity="sha384-lZN37f5QGtY3VHgisS14W3ExzMWZxybE1SJSEsQp9S+oqd12jhcu+A56Ebc1zFSJ" crossorigin="anonymous"/>
    <link href="https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@1,500;1,600;1,700;1,800&family=Roboto:ital,wght@0,300;0,400;0,500;0,700;0,900;1,400&display=swap" rel="stylesheet" />
  </head>

  <body>

    <div class="header_cont">
      <div class="top">
        <div class="row">
          <div class="container">
            <div class="logo">
              <img src="img/logo_tankian.png" alt="" />
            </div>
            <div class="callback">
            <div class="contact-title">
              <a href="contact.php"> Обратная Связь</a>
            </div>

            <div class="number">
              <span style= "font-size:35px; "> <svg width="1em" height="1em" viewBox="0 0 16 16" class="bi bi-telephone-fill" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                  <path fill-rule="evenodd" d="M2.267.98a1.636 1.636 0 0 1 2.448.152l1.681 2.162c.309.396.418.913.296 1.4l-.513 2.053a.636.636 0 0 0 .167.604L8.65 9.654a.636.636 0 0 0 .604.167l2.052-.513a1.636 1.636 0 0 1 1.401.296l2.162 1.681c.777.604.849 1.753.153 2.448l-.97.97c-.693.693-1.73.998-2.697.658a17.47 17.47 0 0 1-6.571-4.144A17.47 17.47 0 0 1 .639 4.646c-.34-.967-.035-2.004.658-2.698l.97-.969z"/>
                </svg></span>
              <p>  +374 93 8000 53</p>
            </div>
          </div>
        </div>
      </div>
      <div class="header__wrapp">
        <div class="container">
          <div class="row">
            <div class="nav__menu">
              <ul class="navbar" id="mainNavbar">
                <li  style = "padding-top:0;" class="nav_item"><a  style = "font-size:35px;" href="russian.php">Главная</a></li>
                <li class="nav_item"><a style = "font-size:35px" href="онас.php">О Нас</a></li>
                <li class="nav_item"><a style = "font-size:35px"  href="services.php">Услуги</a></li>
                <li class="nav_item"><a style = "font-size:35px" href="article.php">Статьи</a></li>
                <li class="nav_item"><a   style = "font-size:35px"  href="documents.php">Документы</a></li>
              </ul>
            </div>
            <div id="language">
              <ul>
                <li type="icon">
                  <a class="active"><i class="fas fa-globe-europe"></i></a>
                  <ul class="submenu">
                    <li><a href="#">English</a></li>
                    <li><a href="russian.php">Русский</a></li>
                    <li><a href="index.php">Հայերեն</a></li>
                  </ul>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div id="law-office">
      <section class="about">
        <div class="animated animatedFadeInUp fadeInUp ">
          <div class="container">
              <div class="title">
                <h2  style="text-align: center; font-size:60px">
                 "Мелик Танкян" адвокатская контора
                  </h2>
              </div>

              <div class="animated"  data-aos="zoom-in-left">
                <p style = "font-size:40px;">
                Адвокатская контора "Мелик Танкян" была основана в 2009 году.<br />
                Номер государственной регистрации:  286.110.07366<br>
                Юридический адрес: ул. Туманяна п / 25 / Ереван 0056<br><br><br></p>

                <h5>Почему выбирают нас</h5>

               <p style = "font-size:40px;"> Адвокатское бюро "Мелик Тангиян", укомплектованное опытными специалистами, <br>
               предлагает услуги надлежащей юридической консультации в области административного права,<br> а также уголовного права.<br>
                    Основное направление деятельности - корпоративное право. Организация укомплектована<br>
                     профессиональными специалистами в области корпоративного, гражданского, административного, а также уголовного права.</p>
              </div>
          </div>
        </div>
      </section>
      
      <section class="services">
        <div class ="animated animate__fadeInTopRight fadeInTopRight">
        <div class="container">
            <div class="service_title"  >
                <h2>Услуги</h2>
            </div>
          </div>
        </div>
      </section>
      <div class="service__content">
          <div class="container" style = "display:flex; flex-wrap:wrap">
             <div class="item" data-aos="flip-up" >
               <div class="item_title">
                  <a style = "font-size:60px;" href="#"><i class="fas fa-briefcase"></i></a>
                  <a  style = "font-size:55px;"href="կորպորատիվ քրեական իրավունք.php">Корпоративное право <br>(бизнес-консалтинг)</a>
                </div>
              </div>
              <div class="item" data-aos="flip-down" >
                <div class="item_title" style = "margin-left:54px">
                  <a  style = "font-size:60px;" href="#"><i class="fas fa-globe"></i></a>
                  <a  style = "font-size:55px;" href="քաղաքացիական իրավունք.php">Гражданские права</a>
                </div>
              </div>
               <div class="item" data-aos="flip-down"> 
                  <div class="item_title" style = "margin-left:20px">
                    <a  style = "font-size:60px;"  href="#"><i class="far fa-file"></i></a>
                    <a  style = "font-size:55px;" href="քրեական իրավունք.php">Уголовное право</a>
                  </div>
                </div>
          
                <div class="item" data-aos="slide-up">
                  <div class="item_title" style = "margin-left:20px">
                    <a   style = "font-size:60px;" href="#"><i class="fas fa-truck"></i></a>
                    <a  style = "font-size:55px;"  href="Մատակարարման խնդիրներ.php">Вопросы доставки и грузоперевозки</a>
                  </div>
                </div>
                <div class="item" data-aos="slide-up">
                  <div class="item_title">
                    <a style = "font-size:60px;" href="#"><i class="fas fa-gavel"></i></a>
                    <a  style = "font-size:55px;" href="դատական ներկայացուցչություն.php">Судебное представительство</a>
                  </div>
                </div>
            <div class="item" data-aos="slide-up">
              <div class="item_title">
                <a style = "font-size:60px;" href="#"><i class="fas fa-calculator"></i></a>
                <a  style = "font-size:55px;" href="աշխատանքային իրավունք.php">Трудовой кодекс</a>
              </div>
            </div>
            <div class="item" data-aos="flip-right">
                <div class="item_title">
                  <a style = "font-size:60px;" href="#"><i class="fas fa-user-shield"></i></a>
                  <a  style = "font-size:55px;" href="ապահովագրական խնդիրներ.php">Страховые проблемы</a> 
                </div>
            </div>
            <div class="item" data-aos="flip-left" class="aos-animate"> 
                <div class="item_title">
                  <a style = "font-size:60px;" href="#"><i class="fas fa-universal-access"></i></a>
                  <a style = "font-size:55px;"href="վարչական իրավախախտում.php" >Административные нарушения</a>
                </div>
            </div>
          </div>
      </div>
    </div>

    <footer>
      <div class="container">
        <div class="about">
          <ul>
            <li><a href="онас.php">О Нас</a></li>
            <li><a href="colegue.html">Наши клиенты</a></li>
          </ul>
          <div class="copyright">
            <p>Copyright © 2011 - 2020 <span>MELIQ TANGYAN</span> 
            </p>
          </div>
        </div>
        <div class="adress">
          <p>Адресс: <span>Гарегин Нжде 64</span> <i class="fas fa-map-pin"></i></i> </p>
          <p>тел: 093 8000 53 <span><i class="fas fa-phone-square"></i></span></p>

          <div class="contact_us">
            <a href="contact.php">Обратная Связь</a>
          </div>
        </div>
        <div class="mapouter"><div class="gmap_canvas"><iframe width="400" height="200" id="gmap_canvas" src="https://maps.google.com/maps?q=48%2F2%20Garegin%20Nzhdeh%20Str%2C0026%20Yerevan%2C%20Armenia&t=&z=13&ie=UTF8&iwloc=&output=embed" frameborder="0" scrolling="no" marginheight="0" marginwidth="0"></iframe><a href="https://www.whatismyip-address.com/nordvpn-coupon/"></a></div><style>.mapouter{position:relative;text-align:right;
          height:400px;width:600px;}.gmap_canvas {overflow:hidden;background:none!important;height:200px;width:600px;}</style></div>
      </div>
  </footer>

    <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js"></script>
    <script src="https://unpkg.com/aos@2.3.1/dist/aos.js"></script>
    <script src="js/main.js"></script>   
  
  </body>
</html>

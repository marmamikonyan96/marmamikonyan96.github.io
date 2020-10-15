<?php 
error_reporting(-1);
ini_set('display_errors',1);
header('Content - Type: text/html');
$page = (isset($_GET['page']) ? $_GET['page'] :'index.php');

?>
<?php include "blocks/header.php"?>
<section class="mail">
    <div class="contact_type">
        <div class="container">
            <div class="section_title">
                <h4>Ուղղիղ կապ մեզ հետ</h4>
            </div>
            <form action="contact  " method="post">
                 <input type="email" name="email" placeholder="Լրացրեք ձեր էլ.հասցեն" class="form-control">
                 <textarea name="message" class="form-control" placeholder="Լրացրեք հարթակը"></textarea>
                 <form action="upload.php" method="post" enctype="multipart/form-data">
                     <input type="file" name="fileToUpload" id="fileToUpload">
                     <input type="submit" value="Upload pdf,image" name="submit">
                </form>
                 <button  style = "margin-left:318px; height:35px;width:145px; font-size:21px" type="submit" name="send">Ուղղարկել</button>
            </form>
        </div>   
          
    </div>
    
</section>
<?php include "blocks/footer.php"?>
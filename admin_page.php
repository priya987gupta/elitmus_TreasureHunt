<?php
$profpic = "assets/bg1.jpg";
@include 'config.php';

session_start();

if(!isset($_SESSION['admin_name'])){
   header('location:login_form.php');
}

?>

<!DOCTYPE html>
<html lang="en">
<head>
   <meta charset="UTF-8">
   <meta http-equiv="X-UA-Compatible" content="IE=edge">
   <meta name="viewport" content="width=device-width, initial-scale=1.0">
   <title>admin page</title>

   
   <link rel="stylesheet" href="css/style.css">
   <style type="text/css">

body {
background-image: url('<?php echo $profpic;?>');
}
</style>

</head>
<body>
   
<div class="container">

   <div class="content">
      <h3>Hi, <span>Admin</span></h3>
      <h1>WELCOME <span><?php echo $_SESSION['admin_name'] ?></span></h1>
      <p>This is an admin page</p>
      <a href="login_form.php" class="btn">login</a>
      <a href="register_form.php" class="btn">register</a>
      <a href="logout.php" class="btn">logout</a>
      <a href="test.php" class="btn">Player Information</a>
   </div>

</div>

</body>
</html>
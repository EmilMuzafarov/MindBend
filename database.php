<?php
$db_sever = "localhost";
$db_user = "root";
$db_pass = "";
$db_name = "login_info";
$conn = "";
try{
    $conn = mysqli_connect($db_sever, $db_user, $db_pass, $db_name);
}
catch(mysqli_sql_exception) {
    echo"Could not connect.";
}
if($conn) {
    echo"You are connected!";
}
?>

!
<?php
$host = 'localhost';
$dbname = 'AceGames';
$user = 'root';
$pass = '42';

$conn = new mysqli($host,$user,$pass,$dbname);

if($conn->connect_error){
    echo 'falha';
}else{
    echo 'certo';
}
?>
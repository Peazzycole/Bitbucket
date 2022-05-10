<?php
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Headers: *");
header("Access-Control-Allow-Methods: GET, POST");

include('./functions.php');


// Get data and Insert it into the database
$json = file_get_contents('php://input');
$checkBoxData = json_decode($json);
$products->deleteData($checkBoxData);

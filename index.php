<?php
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Headers: *");
header("Access-Control-Allow-Methods: GET, POST");

include('./functions.php');


// Get data and Insert it into the database
$productData = file_get_contents('php://input');
$result = json_decode($productData);
$products->insert($result);

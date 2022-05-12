<?php
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Headers: *");
header("Access-Control-Allow-Methods: GET, POST");

include('./functions.php');

// var_dump($products->getProduct());
// Get data and Insert it into the database
$products = new Product();

$json = file_get_contents('php://input');
// $yeah = json_decode($json);
// $datas = $yeah->checkBox;
// // print_r($datas);

// for ($i = 0; $i < count($datas); $i++) {
//     $sku = json_encode($datas[$i]);;

//     print_r($sku);
// }


$products->deleteData($json);

<?php
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Headers: *");
header("Access-Control-Allow-Methods: GET, POST");

include('./functions.php');

$products = new Product();
$productData = file_get_contents('php://input');
$products->insert($productData);

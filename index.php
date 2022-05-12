<?php
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Headers: *");
header("Access-Control-Allow-Methods: GET, POST");

include('./functions.php');

$products = new Product();

// get products
var_dump($products->getProduct());


// save products in database
$productData = file_get_contents('php://input');
$products->addProduct($productData);
var_dump($products->getProduct());

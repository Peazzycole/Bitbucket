<?php
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Headers: *");
header("Access-Control-Allow-Methods: GET, POST");


include('./functions.php');


$products = new Product();

// send products
$results = $products->getProduct();
echo json_encode(['productResult' => $results]);

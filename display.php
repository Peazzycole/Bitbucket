<?php

header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Headers: *");
header("Access-Control-Allow-Methods: GET, POST");

require_once('./vendor/autoload.php');


use App\Product;


$result = Product::getProducts();
echo json_encode(['productResult' => $result]);

<?php

header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Headers: *");
header("Access-Control-Allow-Methods: GET, POST");

require_once('./vendor/autoload.php');

$prodType = [
    "book" => 'App\Book',
    "furniture" => 'App\Furniture',
    "dvd" => 'App\Dvd'
];

$productData = file_get_contents('php://input');
$result = json_decode($productData);
$product = new $prodType[$result->type]($result);
$product->save();

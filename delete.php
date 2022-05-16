<?php

header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Headers: *");
header("Access-Control-Allow-Methods: GET, POST");

require_once('./vendor/autoload.php');

use App\Database;
use App\Product;


$json = file_get_contents('php://input');
$result = json_decode($json);

$product = Product::deleteProducts($result->checkBox);

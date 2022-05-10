<?php
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Headers: *");
header("Access-Control-Allow-Methods: GET, POST");


include('./functions.php');

// fetch product
$product = new Product($db);
$products->fetchData($products);

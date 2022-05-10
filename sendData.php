<?php
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Headers: *");
header("Access-Control-Allow-Methods: GET, POST");


include('./functions.php');

// fetch product
$results = $products->getData();
echo json_encode(['productResult' => $results]);

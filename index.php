<?php

header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Headers: x-Requested-With");
header("Access-Control-Allow-Methods: GET, POST");


include('functions.php');

$results = $products->getData();

echo json_encode(['productResult' => $results]);

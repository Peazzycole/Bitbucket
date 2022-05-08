<?php
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Headers: *");

include('../functions.php');


$con = $db->con;

// var_dump($con);

$productData = file_get_contents('php://input');

if (isset($product) && !empty($product)); {

    $request = json_decode($productData);

    // sanitize
    $sku = $request->sku;
    $name = $request->name;
    $price = $request->price;
    $attribute = $request->attribute;
    $type = $request->type;


    // store
    if ($sku && $name && $price && $attribute) {
        $sql = "INSERT INTO `products`(
            `sku`,
            `name`,
            `price`,
            `attribute`,
            `type`)
            VALUES ('{$sku}','{$name}', '{$price}', '{$attribute}', '{$type}')";
    }


    // save to db and check
    if (mysqli_query($con, $sql)) {
        //success
        // header('location: index.php');
    } else {
        echo 'query error' . mysqli_error($con);
    }
}

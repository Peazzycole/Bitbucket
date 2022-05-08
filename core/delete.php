<?php

header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Headers: *");

include('../functions.php');

$con = $db->con;

// $skus = $_POST['checkBox'];

$json = file_get_contents("php://input");

$obj = json_decode($json);

$Datas = $obj->checkBox;


// print_r($Datas);
// $query = explode(',', $Datas);

// print_r($query);

// print_r($Datas);
// if ($Datas) {

for ($i = 0; $i < count($Datas); $i++) {
    $sku = json_encode($Datas[$i]);
    $sql = "DELETE FROM `products` WHERE sku ={$sku}";
    //         //HERE WILL BE LOOPING THE ARRAY AND PUT IT INTO DATABASE

    if (mysqli_query($con, $sql)) {
        //success

    } else {
        echo 'query error' . mysqli_error($con);
    }
}
// }

// foreach ($Datas as $key => $val) {
//     if (!is_array($val)) {
//         $id = "$val\n";

//         $sql = "DELETE FROM `products` WHERE sku ={$id}";
//         //HERE WILL BE LOOPING THE ARRAY AND PUT IT INTO DATABASE

//         if (mysqli_query($con, $sql)) {
//             //success
//             // header('location: index.php');
//         } else {
//             echo 'query error' . mysqli_error($con);
//         }
//     }
// }



// echo $Datas;
// $OrderanX[] = $obj['Orderan'];
// $extract_id = implode(',', $Datas);



// foreach ($Datas as $id) {
//     print_r($id);

//     $sql = "DELETE FROM `products` WHERE `sku` = `{$id}`";
//     //HERE WILL BE LOOPING THE ARRAY AND PUT IT INTO DATABASE

//     if (mysqli_query($con, $sql)) {
//         //success
//         // header('location: index.php');
//     } else {
//         echo 'query error' . mysqli_error($con);
//     }
// }

// print_r($skus);

// $con = $db->con;

// // var_dump($con);

// $checkData = file_get_contents('php://input');

// // $request = json_decode(json_encode($checkData), true);

// $personArray = objectToArray($checkData);
// function objectToArray($object)
// {
//     if (!is_object($object) && !is_array($object)) {
//         return $object;
//     }
//     return array_map('objectToArray', (array) $object);
// }
// // $all_id = $_POST[$request];
// // $extract_id = implode(',', $request);

// foreach ($personArray as $data) {
//     echo json_encode($Data);
// }

// print_r($request);

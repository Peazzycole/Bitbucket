<?php

require('./classes/DBconnect.php');
include('./abstract/extend.php');
include('./classes/Product.php');



// DB
$db = new DBController();
$con = $db->con;

// Products
$products = new Product($db);

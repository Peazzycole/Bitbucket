<?php
require('core/DBconnect.php');

require('core/products.php');



$db = new DBController();


$products = new Product($db);

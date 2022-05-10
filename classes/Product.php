<?php

class Product extends Test
{
    protected $table = 'products';
    protected $sku;
    protected $name;
    protected $price;
    protected $attribute;
    protected $type;
    protected $datas;

    // dependency injection
    public $db = null;
    public function __construct(DBController $db)
    {
        if (!isset($db->con)) return null;
        $this->db = $db;
    }

    public function fetchData($products)
    {
        $results = $products->getData();
        echo json_encode(['productResult' => $results]);
    }
}

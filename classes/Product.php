<?php

class Product extends Test
{
    protected $table;
    protected $sku;
    protected $name;
    protected $price;
    protected $attribute;
    protected $type;
    protected $datas;
    protected $db;

    // dependency injection

    public function __construct(DBController $db)
    {
        $this->table = 'products';

        if (!isset($db->con)) return null;
        $this->db = $db;
    }

    public function fetchData($products)
    {
        $results = $products->getData();
        echo json_encode(['productResult' => $results]);
    }
}

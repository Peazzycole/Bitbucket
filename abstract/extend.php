<?php


abstract class Test extends DBController
{


    protected $table = 'products';
    protected $sku;
    protected $name;
    protected $price;
    protected $attribute;
    protected $type;
    protected $db;
    protected $datas = [];

    public function __construct()
    {
        $this->db = new DBController();
    }

    // get product function
    public function getProduct()
    {
        $this->db->query("SELECT * from products");
        return $this->db->resultset();
    }
}

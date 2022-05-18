<?php

namespace App;



abstract class Product
{
    protected $sku;
    protected $name;
    protected $price;
    protected $type;
    protected $dbConn;

    public function __construct($inputs)
    {
        $this->sku = $inputs->sku;
        $this->name = $inputs->name;
        $this->price = $inputs->price;
        $this->type = $inputs->type;
        $this->dbConn = new Database();
    }

    // getters
    public function getSku()
    {
        return $this->sku;
    }
    public function getName()
    {
        return $this->name;
    }
    public function getPrice()
    {
        return $this->price;
    }
    public function getType()
    {
        return $this->type;
    }

    public function getAttr()
    {
        return $this->attribute;
    }

    // -----------------



    public function save()
    {
        $this->dbConn->query("INSERT INTO products(name, sku, price, attribute, type ) VALUES(:name, :sku, :price, :attribute , :type)");
        $this->dbConn->bind(':name', $this->getName());
        $this->dbConn->bind(':sku', $this->getSku());
        $this->dbConn->bind(':price', $this->getPrice());
        $this->dbConn->bind(':attribute', $this->getAttr());
        $this->dbConn->bind(':type', $this->getType());
        $this->dbConn->execute();
    }




    // get all products
    public static function getProducts()
    {
        $dbConn = new Database();
        $dbConn->query("SELECT * FROM products");
        return $dbConn->resultSet();
    }




    // get products by sku
    public function getProductsBySku($sku)
    {
        $this->dbConn->query("SELECT * FROM products where sku = :sku");
        $this->dbConn->bind(':sku', $sku);
        $this->dbConn->single();
    }

    public static function deleteProducts($skus)
    {
        $dbConn = new Database();
        for ($i = 0; $i < count($skus); $i++) {
            $skuu = $skus[$i];
            $dbConn->query("DELETE FROM products where sku = :sku");
            $dbConn->bind(':sku', $skuu);
            $dbConn->execute();
        }
    }
}

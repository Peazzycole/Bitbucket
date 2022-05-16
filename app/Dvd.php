<?php

namespace App;

class Dvd extends Product
{

    protected $attribute;

    public function __construct($inputs)
    {
        parent::__construct($inputs);
        $this->attribute = $inputs->size . "MB";
    }

    public function save()
    {
        $this->dbConn->query("INSERT INTO products(name, sku, price, attribute, type) VALUES(:name, :sku, :price, :attribute , :type)");
        $this->dbConn->bind(':name', $this->getName());
        $this->dbConn->bind(':sku', $this->getSku());
        $this->dbConn->bind(':price', $this->getPrice());
        $this->dbConn->bind(':attribute', $this->getAttr());
        $this->dbConn->bind(':type', $this->getType());
        $this->dbConn->execute();
    }
}

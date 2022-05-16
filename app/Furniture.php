<?php

namespace App;

class Furniture extends Product
{

    protected $attribute;

    public function __construct($inputs)
    {
        parent::__construct($inputs);
        $this->attribute = $inputs->height . 'x' . $inputs->width . 'x' . $inputs->length;
    }

    public function save()
    {
        $this->dbConn->query("INSERT INTO products(name, sku, price, attribute, type ) VALUES(:name, :sku, :price, :attribute , :type)");
        $this->dbConn->bind(':name', $this->name);
        $this->dbConn->bind(':sku', $this->sku);
        $this->dbConn->bind(':price', $this->price);
        $this->dbConn->bind(':attribute', $this->attribute);
        $this->dbConn->bind(':type', $this->type);
        $this->dbConn->execute();
    }
}

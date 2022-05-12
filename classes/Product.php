<?php

class Product extends Test
{

    protected $table = 'products';
    protected $sku;
    protected $name;
    protected $price;
    protected $type;
    protected $attribute;

    function __construct()
    {
        parent::__construct($this->table);
    }

    // display all products
    public function getAll()
    {

        return $this->selectAll()->get();
    }


    public function insert($productData)
    {
        $productData = file_get_contents('php://input');
        $request = json_decode($productData);
        $this->setProps($request);

        if ($this->sku && $this->name && $this->price && $this->attribute) {
            $sql = $this->putData($this->table, $this->sku, $this->name, $this->price, $this->attribute, $this->type);
        }
        $this->confirm($sql);
    }

    // display all products
    public function deleteData($json)
    {
        $obj = json_decode($json);
        $this->datas = $obj->checkBox;
        for ($i = 0; $i < count($this->datas); $i++) {
            $this->sku = json_encode($this->datas[$i]);
            $sql = $this->deleteProducts($this->table, $this->sku);
            $this->confirm($sql);
        }
    }
}

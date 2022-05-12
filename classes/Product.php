<?php

class Product extends Test
{


    // insert records
    public function addProduct($productData)
    {
        $request = json_decode($productData);
        $this->sku = $request->sku;
        $this->name = $request->name;
        $this->price = $request->price;
        $this->attribute = $request->attribute;
        $this->type = $request->type;

        if ($this->sku && $this->name && $this->price && $this->attribute) {
            $this->db->query("INSERT INTO `{$this->table}`(
                        `sku`,
                        `name`,
                        `price`,
                        `attribute`,
                        `type`)
                        VALUES ('{$this->sku}','{$this->name}', '{$this->price}', '{$this->attribute}', '{$this->type}')");
        }

        if ($this->db->execute()) {
            return true;
        } else {
            return false;
        }
    }


    // delete products
    public function deleteData($json)
    {
        $obj = json_decode($json);
        $this->datas = $obj->checkBox;

        for ($i = 0; $i < count($this->datas); $i++) {
            $this->sku = json_encode($this->datas[$i]);
            $this->db->query("DELETE FROM `{$this->table}`  sku ={$this->sku}");

            if ($this->db->execute()) {
                return true;
            } else {
                return false;
            }
        }
    }
}

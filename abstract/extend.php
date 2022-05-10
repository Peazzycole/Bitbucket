<?php


abstract class Test
{


    // insert data
    public function insert($productData)
    {
        $productData = file_get_contents('php://input');
        $request = json_decode($productData);
        $this->sku = $request->sku;
        $this->name = $request->name;
        $this->price = $request->price;
        $this->attribute = $request->attribute;
        $this->type = $request->type;

        if ($this->sku && $this->name && $this->price && $this->attribute) {
            $sql = "INSERT INTO `{$this->table}`(
                        `sku`,
                        `name`,
                        `price`,
                        `attribute`,
                        `type`)
                        VALUES ('{$this->sku}','{$this->name}', '{$this->price}', '{$this->attribute}', '{$this->type}')";
        }

        if (mysqli_query($this->db->con, $sql)) {
            //success
            // header('location: index.php');
        } else {
            echo 'query error' . mysqli_error($this->db->con);
        }
    }


    // fetch data from database
    public function getData()
    {

        $result = $this->db->con->query("SELECT * FROM `{$this->table}`");

        $resultArray = array();

        // fetch product data one by one
        while ($item = mysqli_fetch_array($result, MYSQLI_ASSOC)) {
            $resultArray[] = $item;
        }

        return $resultArray;
    }




    // delete data from the database
    public function deleteData($json)
    {
        $json = file_get_contents('php://input');
        $obj = json_decode($json);
        $this->datas = $obj->checkBox;
        for ($i = 0; $i < count($this->datas); $i++) {
            $this->sku = json_encode($this->datas[$i]);
            $sql = "DELETE FROM `{$this->table}` WHERE sku ={$this->sku}";
            //         //HERE WILL BE LOOPING THE ARRAY AND PUT IT INTO DATABASE

            if (mysqli_query($this->db->con, $sql)) {
                //success

            } else {
                echo 'query error' . mysqli_error($this->db->con);
            }
        }
    }
}

<?php


abstract class Test extends DBController
{


    protected $db;
    protected $query = '';
    protected $table;
    protected $stmt;



    public function __construct($table)
    {
        $this->db = (new DBController)->get();
        $this->table = $table;
    }

    // select query
    public function selectAll()
    {
        $this->query = 'SELECT *  FROM ' . $this->table;
        return $this;
    }

    // bind statement
    private function bind()
    {
        $this->stmt = $this->db->prepare($this->query);
        $this->stmt->execute();
        return $this->stmt;
    }

    // get data
    public function get()
    {
        return mysqli_fetch_all($this->bind()->get_result(), MYSQLI_ASSOC);
    }


    // query to insert into database
    public function putData($table, $sku, $name, $price, $attribute, $type)
    {
        $this->query = "INSERT INTO `{$table}`(
        `sku`,
        `name`,
        `price`,
        `attribute`,
        `type`)
        VALUES ('{$sku}','{$name}', '{$price}', '{$attribute}', '{$type}')";

        return $this->query;
    }

    // delete query
    public function deleteProducts($table, $sku)
    {
        $this->query = "DELETE FROM `{$table}` WHERE sku ={$sku}";
        return $this->query;
    }

    // set properties
    public function setProps($request)
    {
        $this->sku = $request->sku;
        $this->name = $request->name;
        $this->price = $request->price;
        $this->attribute = $request->attribute;
        $this->type = $request->type;

        return $this;
    }


    // mysql
    public function confirm($sql)
    {
        if (mysqli_query($this->db, $sql)) {
            //success
            // header('location: index.php');
        } else {
            echo 'query error' . mysqli_error($this->db);
        }
    }
}

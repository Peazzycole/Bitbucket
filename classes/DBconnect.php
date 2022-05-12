
<?php

class DBController
{
    // Database Connection Properties
    protected $host = 'localhost';
    protected $user = 'root';
    protected $password = '';
    protected $database = "scandiw";
    protected $stmt;


    // connection property
    protected $con;
    protected $error;


    // PDO connection
    public function __construct()
    {
        $dsn = 'mysql:host=' . $this->host . ';dbname=' . $this->database;
        $options = array(
            PDO::ATTR_PERSISTENT => true,
            PDO::ATTR_ERRMODE => PDO::ERRMODE_EXCEPTION
        );
        try {
            $this->con = new PDO($dsn, $this->user, $this->password, $options);
        } catch (PDOException $e) {
            $this->error = $e->getMessage() . PHP_EOL;
        }
    }


    // query method
    public function query($query)
    {
        $this->stmt = $this->con->prepare($query);
    }


    // Execute prepared statement
    public function execute()
    {
        return $this->stmt->execute();
    }


    // get result as array
    public function resultset()
    {
        $this->execute();
        return $this->stmt->fetchAll(PDO::FETCH_OBJ);
    }

    // row count
    public function rowCount()
    {
        return $this->stmt->rowCount();
    }

    // get single product
    public function singleProduct()
    {
        $this->execute();
        return $this->stmt->fetch(PDO::FETCH_OBJ);
    }


    // bind
    public function bind($param, $value)
    {
        $this->stmt->bindValue($param, $value);
    }
}

// $db = new DBController();

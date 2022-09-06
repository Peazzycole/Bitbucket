<?php

namespace App;

use PDO;
use Exception;

class Database
{
    // Database Connection Properties
    private $host = 'localhost';
    private $user = 'root';
    private $password = '';
    private $database = "scandiw";

    protected $connection;
    protected $error;
    protected $stmt;

    public function __construct()
    {
        $dsn = 'mysql:host=' . $this->host . ';dbname=' . $this->database;
        $options = array(
            PDO::ATTR_PERSISTENT => true,
            PDO::ATTR_ERRMODE => PDO::ERRMODE_EXCEPTION
        );
        try {
            $this->connection = new PDO($dsn, $this->user, $this->password, $options);
        } catch (Exception $e) {
            $this->error = $e->getMessage() . PHP_EOL;
        }
    }

    // prepare statement wih query
    public function query($query)
    {
        $this->stmt = $this->connection->prepare($query);
    }

    // execute the prepared statement
    public function execute()
    {
        return $this->stmt->execute();
    }

    // Get result set as a array of objects
    public function resultSet()
    {
        $this->execute();
        return $this->stmt->fetchAll(PDO::FETCH_OBJ);
    }

    // get record row count
    public function rowCount()
    {
        return $this->stmt->rowCount();
    }

    // get single data
    public function single()
    {
        $this->execute();
        return $this->stmt->fetch(PDO::FETCH_OBJ);
    }

    public function bind($param, $value)
    {
        $this->stmt->bindValue($param, $value);
    }
}

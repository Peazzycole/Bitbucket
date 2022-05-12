
<?php

class DBController
{
    // Database Connection Properties
    protected $host = 'localhost';
    protected $user = 'root';
    protected $password = '';
    protected $database = "scandiw";
    protected $stmt;






    private $conn;

    function __construct()
    {
        $this->conn = new mysqli($this->host, $this->user, $this->password, $this->database);
        $this->conn->set_charset('utf8mb4');
        if ($this->conn->connect_error) {
            die("Connection failed: " . $this->connection->connect_error);
        }
    }

    public function get()
    {
        return $this->conn;
    }
}

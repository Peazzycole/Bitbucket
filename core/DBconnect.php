
<?php


define('DB_HOST', 'localhost');
define('DB_USER', 'root');
define('DB_PASS', '');
define('DB_NAME', 'scandiw');


class DBController
{
    // Database Connection Properties
    // protected $host = 'localhost';
    // protected $user = 'root';
    // protected $password = '';
    // protected $database = "scandiw";



    // connection property
    public $con = null;

    // call constructor
    public function __construct()
    {
        $this->con = mysqli_connect(DB_HOST, DB_USER, DB_PASS, DB_NAME);
        if ($this->con->connect_error) {
            echo "Fail " . $this->con->connect_error;
        }
    }



    public function __destruct()
    {
        $this->closeConnection();
    }

    // for mysqli closing connection
    protected function closeConnection()
    {
        if ($this->con != null) {
            $this->con->close();
            $this->con = null;
        }
    }
}

<?php
namespace Src\Services;

use mysqli;

class ProductService
{
    private $conn;

    public function __construct(mysqli $conn)
    {
        $this->conn = $conn;
    }

    public function getAllProducts()
    {
        $sql = "SELECT * FROM products";
        $result = $this->conn->query($sql);

        $products = array();

        while ($row = $result->fetch_assoc()) {
            $products[] = $row;
        }

        return $products;
    }
}

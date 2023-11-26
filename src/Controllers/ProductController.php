<?php
namespace Src\Controllers;

use Src\Resources\ProductResource;

class ProductController
{
    private $productResource;

    public function __construct(ProductResource $productResource)
    {
        $this->productResource = $productResource;
    }

    public function handleRequest()
    {
        $this->productResource->getAllProducts();
    }
}


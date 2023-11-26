<?php
namespace Src\Resources;

use Src\Services\ProductService;

class ProductResource
{
    private $productService;

    public function __construct(ProductService $productService)
    {
        $this->productService = $productService;
    }

    public function getAllProducts()
    {
        $products = $this->productService->getAllProducts();

        if (empty($products)) {
            http_response_code(404);
            echo json_encode(array("message" => "No products found."));
        } else {
            header('Content-Type: application/json');
            echo json_encode($products);
        }
    }
}


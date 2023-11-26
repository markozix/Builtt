<?php

use DI\ContainerBuilder;
use Src\Controllers\ProductController;
use Src\Resources\ProductResource;
use Src\Services\ProductService;

require_once 'vendor/autoload.php';

$containerBuilder = new ContainerBuilder();
try {
    $container = $containerBuilder->build();
} catch (Exception $e) {
    echo 'There was a problem with connecting to DB';
}

$container->set('db_config', [
    'servername' => '127.0.0.1',
    'username' => 'root',
    'password' => '',
    'dbname' => 'builtt'
]);

$container->set('db', function ($c) {
    $config = $c->get('db_config');
    return new mysqli($config['servername'], $config['username'], $config['password'], $config['dbname']);
});

$container->set(ProductService::class, function ($c) {
    $databaseConnection = $c->get('db');
    return new ProductService($databaseConnection);
});

$container->set(ProductResource::class, function ($c) {
    $productService = $c->get(ProductService::class);
    return new ProductResource($productService);
});

$container->set(ProductService::class, function ($c) {
    return new ProductService($c->get('db')); // Adjust as needed
});

$container->set(ProductController::class, function ($c) {
    $productResource = $c->get(ProductResource::class);
    return new ProductController($productResource);
});

return $container;

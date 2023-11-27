<?php
header('Access-Control-Allow-Origin: *');
require '../vendor/autoload.php';

$container = require_once '../container.php';

use Src\Controllers\ProductController;

define('BASE_PATH', __DIR__);

// Create an instance of the controller using the container
$controller = $container->get(ProductController::class);

// Call the action method
$controller->handleRequest();


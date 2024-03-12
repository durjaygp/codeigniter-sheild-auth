<?php

use CodeIgniter\Router\RouteCollection;

/**
 * @var RouteCollection $routes
 */
$routes->get('/', 'Home::index');


service('auth')->routes($routes);

$routes->get('/dashboard', 'DashboardController::index' ,['filter' => 'session']);
$routes->get('/profile', 'DashboardController::profilePage' ,['filter' => 'session']);



<?php
$config = require_once 'configs/config.php';
require_once 'functions.php';
require_once 'classes/Db.php';
require_once 'classes/Pagination.php';
require_once 'classes/Validator.php';


$db = (Db::getInstance())->getConnection($config['db']);
$total = get_count('city');

$page = $_GET['page'] ?? 1;
$per_page = $config['per_page'];
$pagination = new Pagination((int)$page, $per_page, $total);
$start = $pagination->get_start();
$cities = get_cities($start, $per_page);


require_once 'views/index.tpl.php';
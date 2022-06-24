<?php
    require_once __DIR__ . "/api.php";

    header("Content-type: application/json");

    $response = $database;

    echo json_encode($response);
?>
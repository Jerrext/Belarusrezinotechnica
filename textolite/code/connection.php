<?php
    $connection = mysqli_connect("localhost", "root", "", "add_news");
    if (!$connection) { echo "Ошибка соединения"; exit(); }

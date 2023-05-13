<?php
    require "connection.php";
    $title = $_POST['title'];
    $intro = $_POST['intro'];
    $text = $_POST['text'];
    $error = '';
    if (strlen($title) < 10) $error = "Заголовок должен содержать не менее 10 символов";
    else if (strlen($intro) < 20) $error = "Интро должен содержать не менее 20 символов";
    else if (strlen($text) < 30) $error = "Текст должен содержать не менее 30 символов";
    if ($error) {
        echo $error;
        exit();
    } else {
        $connection -> query("INSERT INTO `articles` (`title`, `intro`, `text`) VALUES ('$title', '$intro', '$text')");
        echo "ready";
    }

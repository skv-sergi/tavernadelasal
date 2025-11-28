<?php

// Get current page from URL parameter or default to 'ca'
$current_page = isset($_GET['lang']) ? $_GET['lang'] : 'ca';

// Check page
switch ($current_page) {
    case 'es':
        include 'es.php';
        break;
    case 'en':
        include 'en.php';
        break;
    case 'fr':
        include 'fr.php';
        break;
    case 'ca':
    default:
        include 'ca.php';
}
   
?>
<?php

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
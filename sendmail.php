<?php
    $name = $_POST['name'];
    $email = $_POST['email'];

	$to = "info@expovision.io"; 
	$date = date ("d.m.Y"); 
	$time = date ("h:i");
	$from = $email;
	$subject = "Заявка c сайта MortumX!";

	
	$msg="
    Имя: $name 
    Email: $email"; 	
	mail($to, $subject, $msg, "From: $to ");

?>



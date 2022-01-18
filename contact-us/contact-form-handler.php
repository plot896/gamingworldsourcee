<?php
 ini_set ('display_errors', 'on');
 ini_set ('log_errors', 'on');
 ini_set ('display_startup_errors', 'on');
 ini_set ('error_reporting', E_ALL);

require('./sendgrid-php/sendgrid-php.php');

$name = $_POST['name'];
$em = $_POST['email'];
$message = $_POST['message'];
$subject = "Contact Request: $name";

if ( !$name || !$em || !$message) {
  header('Location: /');
  exit;
}

$msg = "
  Contact request from:
  Name: $name
  Email: $em
  Message: $message
";

$to = 'worldgameworld9@gmail.com';

$email = new \SendGrid\Mail\Mail();
$email->setFrom("games@typinggame.in", "Typing Games");
$email->setSubject($subject);
$email->addTo($to, "Naman");
$email->addContent("text/plain", $msg);

$sendgrid = new \SendGrid('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');

try {
    $response = $sendgrid->send($email);
    // print $response->statusCode() . "\n";
    // print_r($response->headers());
    // print $response->body() . "\n";
    header('Location: /');
    exit;
} catch (Exception $e) {
    echo 'Error Occured: '. $e->getMessage() ."\n";
}


?>
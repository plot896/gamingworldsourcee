<?php

ini_set ('display_errors', 'on');
 ini_set ('log_errors', 'on');
 ini_set ('display_startup_errors', 'on');
 ini_set ('error_reporting', E_ALL);

require("/home/venkatk/www.knowaretech.com/sendgrid-php/sendgrid-php.php");


if(isset($_POST['submit'])){
        $name = $_POST['name'];
        $email = $_POST['email'];
        $subject = $_POST['subject'];
        $message = $_POST['message'];

        // $to = 'rahuls360@gmail.com';
        $to = 'ahsan@knowaretech.com';
        // $to = 'superpulse.x@gmail.com';
        $subject = 'KnowWareTech - Contact Form';
        $msg = "Name: $name\nEmail: $email\nSubject: $subject\nMessage: $message";




$email = new \SendGrid\Mail\Mail();
$email->setFrom("rahul@webhawks.in", "Rahul Makhija");
$email->setSubject($subject);
$email->addTo($to, "Owner");
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

}else{
  echo "Working properly";
}

?>

<?php
if ($_SERVER["REQUEST_METHOD"] == "POST"){
    $name = htmlspecialchars($_POST["name"]);
    $email = filter_var($_POST["email"], FILTER_SANITIZE_EMAIL);
    $message = htmlspecialchars($_POST["message"]);

    if (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
        echo "Invalid email format";
        exit;
    }

    $to = "siya.biyo.bongi@gmail.com";
    $subject = "New Contact Form From $name";
    $body = "Name: $name\n";
    $body .= "Email: $email\n\n";
    $body .= "Message: $message\n";

    $headers = "From: $email"."\r\n"."Reply-To: $email"."\r\n"."X-Mailer: PHP/".phpversion();

    if (mail($to, $subject, $body, $headers)){
        echo "Your message has been sent successfully!";
    }else{
        echo "There was a problem sending your message. Please try again";
    }
}
?>
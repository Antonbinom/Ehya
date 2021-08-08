<?php
// Файлы phpmailer
require 'phpmailer/PHPMailer.php';
require 'phpmailer/SMTP.php';
require 'phpmailer/Exception.php';

// Переменные, которые отправляет пользователь
$name = $_POST['name'];
$phone = $_POST['phone'];
$mail = $_POST['mail'];

if(($name) && ($phone) && ($mail)){
    $title = 'Заказ на сайте Ehya';
		$body = "
		<h2>Данные заказчика</h2>
		<b>Имя:</b> $name<br>
		<b>Телефон:</b> $phone<br>
        <b>Почта:</b> $mail<br><br>
		";
}   else {
    $title = 'Регистрация пользователя на сайте Ehya';
		$body = "
		<h2>Подписка на рассылку</h2>
		<b>Почта:</b> $mail<br>
        ";
}
// Настройки PHPMailer
$mail = new PHPMailer\PHPMailer\PHPMailer();
try {
    $mail->isSMTP();
    $mail->CharSet = "UTF-8";
    $mail->SMTPAuth   = true;
    // $mail->SMTPDebug = 2;
    $mail->Debugoutput = function($str, $level) {$GLOBALS['status'][] = $str;};

    // Настройки вашей почты
    $mail->Host       = 'smtp.gmail.com'; // SMTP сервера вашей почты
        include 'logpass.php';
    $mail->SMTPSecure = 'ssl';
    $mail->Port       = 465;
    $mail->setFrom('antonbinom2021@gmail.com', 'Семенихин Антон'); // Адрес самой почты и имя отправителя

    // Получатель письма
    $mail->addAddress('Antonbinom@yandex.ru');

// Отправка сообщения
$mail->isHTML(true);
$mail->Subject = $title;
$mail->Body = $body;

// Проверяем отравленность сообщения
if ($mail->send()) {$result = "success";}
else {$result = "error";}

} catch (Exception $e) {
    $result = "error";
    $status = "Сообщение не было отправлено. Причина ошибки: {$mail->ErrorInfo}";
}

// Отображение результата
header('location: thanks.html');
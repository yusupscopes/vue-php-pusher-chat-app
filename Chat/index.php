<?php

header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Headers: Content-Type");
$_POST = json_decode(file_get_contents('php://input'), true);

require('../vendor/autoload.php');

$dotenv = new Dotenv\Dotenv('../');
$dotenv->load();

$options = [
    'cluster' => 'ap1',
    'encrypted' => true
];

$pusher = new Pusher\Pusher(
    $_ENV['PUSHER_APP_KEY'],
    $_ENV['PUSHER_APP_SECRET'],
    $_ENV['PUSHER_APP_ID'],
    $options
);

if ($_GET['method'] == 'sendMessage') {
    $data['username'] = $_POST['username'];
    $data['message'] = $_POST['message'];
    $data['time'] = $_POST['time'];
    $pusher->trigger('chat-channel', 'chat-event', $data);
}

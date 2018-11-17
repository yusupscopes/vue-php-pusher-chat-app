<?php

require('../vendor/autoload.php');

$dotenv = new Dotenv\Dotenv(__DIR__);
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

// $data['message'] = 'hello world';
// $pusher->trigger('chat-channel', 'chat-event', $data);

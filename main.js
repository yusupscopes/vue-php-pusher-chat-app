// Enable pusher logging - don't include this in production
Pusher.logToConsole = true;

var pusher = new Pusher('4b0798b5ec6a23e31038', {
    cluster: 'ap1',
    encrypted: true,
});

var channel = pusher.subscribe('my-channel');


var vi = new Vue({
    el: '#app',
    data: {
        url: 'http://localhost/pusher-chat/Chat/index.php',
        chats: [],
        username: '',
        chatInput: ''
    },
    methods: {
        sendMessage: function (e) {
            console.log(e)
        }
    }
})

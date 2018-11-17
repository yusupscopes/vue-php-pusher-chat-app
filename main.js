// Enable pusher logging - don't include this in production
Pusher.logToConsole = true;

var pusher = new Pusher('4b0798b5ec6a23e31038', {
    cluster: 'ap1',
    encrypted: true,
});

var channel = pusher.subscribe('chat-channel');


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
            // console.log(e)
            if (e.keyCode === 13 && !e.shitfKey) {
                e.preventDefault()

                if (this.chatInput == '' || this.chatInput.trim() == '') {
                    return
                }
                var date = new Date()

                axios.post(this.url + '?method=sendMessage', {
                    username: this.username,
                    message: this.chatInput,
                    time: date.toLocaleString()
                }).then(function (response) {
                    console.log(response)
                })
            }
        }
    }
})

channel.bind('chat-event', function (data) {
    console.log('ini dari channel event ---');
    console.log(data);
})

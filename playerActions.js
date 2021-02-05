    // user_id
    function karbar() {
        users = ['user01', 'user02', 'user03', 'user04', 'user05', 'user06', 'user07', 'user08', 'user09', 'user00'];
        return users[Math.floor(Math.random() * users.length)];
    }

    // channel_id
    function channel_id() {
        channels = ['channel01', 'channel02', 'channel03', 'channel04', 'channel05', 'channel06', 'channel07', 'channel08',
            'channel09', 'channel00'];
        return channels[Math.floor(Math.random() * channels.length)];
    }

    // content_id
    var content_id = 1;//document.getElementById("player").getAttribute

    //content_type_id
    function content_type_id() {
        return CONTENT_TYPE[Math.floor(Math.random() * 4)];
    }

    //service_id
    function service_id() {
        return SERVICE_TYPE[Math.floor(Math.random() * 4)];
    }

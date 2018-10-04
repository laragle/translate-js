import Echo from 'laravel-echo'
import axios from 'axios'

window.Pusher = require('pusher-js');

class Translate {
    constructor(options) {
        axios.get('/laragle/translate/token')
            .then(({ data }) => {
                var echo = new Echo({
                    broadcaster: 'pusher',
                    key: options.key,
                    cluster: 'mt1',
                    encrypted: true,
                    //authEndpoint: 'http://api.lanslate.local/broadcasting/auth',
                    auth: { headers: { Authorization: "Bearer " + data } }
                });

                // echo.private('order.1')
                //     .listen('OrderShipped', (e) => {
                //         console.log('e.order.name');
                //     });

            })
    }

}

module.exports = Translate

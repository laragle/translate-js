import Echo from 'laravel-echo'
import axios from 'axios'

window.Pusher = require('pusher-js');

class Translate {
    constructor(options) {
        const http = axios.create({
            baseURL: options.appUrl
        })

        http.get('laragle/translate/token')
            .then(({ data }) => {
                var echo = new Echo({
                    broadcaster: 'pusher',
                    key: options.key,
                    cluster: 'mt1',
                    encrypted: true,
                    authEndpoint: options.authEndpoint,
                    auth: { headers: { Authorization: "Bearer " + data } }
                });

                echo.private(options.channel)
                    .listen('TranslationUpdated', (e) => {
                        http.post('laragle/translate/update', e);
                    });

                echo.private(options.channel)
                    .listen('TranslationAdded', (e) => {
                        http.post('laragle/translate/update', e);
                    });

                echo.private(options.channel)
                    .listen('TranslationDeleted', (e) => {
                        http.delete('laragle/translate/delete', e);
                    });
            })
    }

}

module.exports = Translate

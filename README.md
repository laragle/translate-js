## Laragle Translate Real-time support
Laragle Translate is a Laravel localization management system that will update your localization files in real-time.


## Installation

You can install the package via yarn:

```bash
yarn add @laragle/translate
```

or npm:

```bash
npm install @laragle/translate --save
```

Lastly, add the following javascript code.

```js
import Translate from 'laragle-translate';

new Translate({
    key: 'b83ca2ed4a1a4e39b2b3',
    channel: 'APP_ID', // Your Laragle Translate app id.
    authEndpoint: 'https://api.translate.laragle.com/broadcasting/auth',
    appUrl: 'APP_URL' // Your Laravel backend URL.
});
```

You can get your APP_ID by creating a project [here](https://translate.laragle.com)


## License

The MIT License (MIT). Please see [License File](LICENSE) for more information.

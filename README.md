## Laragle Translate Real-time support
Laragle Translate is a Laravel localization management system that will update your localization files in real-time.


## Installation

You can install the package via yarn:

```bash
yarn add laragle-translate-js
```

or npm:

```bash
npm install laragle-translate-js --save
```

Lastly, add the following javascript code.

```js
import Translate from 'laragle-translate-js';

new Translate({
    key: 'b83ca2ed4a1a4e39b2b3',
    channel: 'APP_ID',
    authEndpoint: 'https://translate.laragle.com/broadcasting/auth'
});
```

You can get your APP_ID by creating a project [here](https://translate.laragle.com)


## License

The MIT License (MIT). Please see [License File](LICENSE.md) for more information.

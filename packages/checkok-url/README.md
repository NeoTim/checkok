# checkok-email

## Installation

```sh
yarn add checkok checkok-email
```

## Usage

```js
import { check } from 'checkok'
import email from 'checkok-email'

const result = check('foo').pipe(email('should be a email'))

console.log(result) // { ok: false, message: 'should be a email' }
```

## License

[MIT License](https://github.com/forsigner/checkok/blob/master/LICENSE)

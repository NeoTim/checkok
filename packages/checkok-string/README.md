# checkok-string

## Installation

```sh
yarn add checkok checkok-string
```

## Usage

```js
import { check } from 'checkok'
import string from 'checkok-string'

// ok
const result = check('foo').pipe(string('should be a string'))
console.log(result) // { ok: true }

// not ok
const result = check(123).pipe(string('should be a string'))
console.log(result) // { ok: false, message: 'should be a string' }
```

## License

[MIT License](https://github.com/forsigner/checkok/blob/master/LICENSE)

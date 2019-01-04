# checkok-number

## Installation

```sh
yarn add checkok checkok-number
```

## Usage

```js
import { check } from 'checkok'
import number from 'checkok-number'

const result = check('123').pipe(number('Should be a number'))

console.log(result) // { ok: false, message: 'Should be a number' }
```

## License

[MIT License](https://github.com/forsigner/checkok/blob/master/LICENSE)

# checkok-max

## Installation

```sh
yarn add checkok checkok-max
```

## Usage

```js
import { check } from 'checkok'
import max from 'checkok-max'

// max length in string
const result = check('foobar').pipe(max(10, 'some, msg'))
console.log(result) // { ok: true }

// max in number
const result = check(5).pipe(max(10, 'some, msg'))
console.log(result) // { ok: true }
```

## License

[MIT License](https://github.com/forsigner/checkok/blob/master/LICENSE)

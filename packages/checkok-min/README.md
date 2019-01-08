# checkok-min

## Installation

```sh
yarn add checkok checkok-min
```

## Usage

```js
import { check } from 'checkok'
import min from 'checkok-min'

const result = check('foobar').pipe(min(3, 'some msg'))

console.log(result) // { ok: true }
```

## License

[MIT License](https://github.com/forsigner/checkok/blob/master/LICENSE)

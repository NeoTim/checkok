# checkok-required

## Installation

```sh
yarn add checkok checkok-required
```

## Usage

```js
import { check } from 'checkok'
import required from 'checkok-required'

const result = check('').pipe(required('can not empty'))

console.log(result) // { ok: false, message: 'can not empty' }
```

## License

[MIT License](https://github.com/forsigner/checkok/blob/master/LICENSE)

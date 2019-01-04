# checkok-equal

## Installation

```sh
yarn add checkok checkok-equal
```

## Usage

```js
import { check } from 'checkok'
import equal from 'checkok-equal'

const result = check('123').pipe(equal('456', 'Password should be same'))

console.log(result) // { ok: false, message: 'Password should be same' }
```

## License

[MIT License](https://github.com/forsigner/checkok/blob/master/LICENSE)

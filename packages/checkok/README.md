# checkok

[![npm](https://img.shields.io/npm/v/checkok.svg)](https://www.npmjs.com/package/checkok) [![Build Status](https://travis-ci.org/forsigner/checkok.svg?branch=master)](https://travis-ci.org/forsigner/checkok) [![Coverage Status](https://coveralls.io/repos/github/forsigner/checkok/badge.svg?branch=master)](https://coveralls.io/github/forsigner/checkok?branch=master)
[![npm](https://img.shields.io/badge/TypeScript-%E2%9C%93-007ACC.svg)](https://www.typescriptlang.org/) [![GitHub license](https://img.shields.io/github/license/forsigner/checkok.svg)](https://github.com/forsigner/checkok/blob/master/LICENSE)

>

## Installation

```sh
yarn add checkok checkok-string checkok-required checkok-email
```

## Usage

```js
import { check } from 'checkok'
import string from 'checkok-string'
import required from ' check-required'
import email from ' check-email'

const result = check('test@test.com').pipe(
  string(),
  required('can not empty'),
  email('Email is invalid'),
)

console.log(result) // { ok: true }
```

## License

[MIT License](https://github.com/forsigner/checkok/blob/master/LICENSE)

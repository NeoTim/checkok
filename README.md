# Checkok

[![npm](https://img.shields.io/npm/v/checkok.svg)](https://www.npmjs.com/package/checkok) [![Build Status](https://travis-ci.org/forsigner/checkok.svg?branch=master)](https://travis-ci.org/forsigner/checkok) [![Coverage Status](https://coveralls.io/repos/github/forsigner/checkok/badge.svg?branch=master)](https://coveralls.io/github/forsigner/checkok?branch=master)
[![npm](https://img.shields.io/badge/TypeScript-%E2%9C%93-007ACC.svg)](https://www.typescriptlang.org/) [![GitHub license](https://img.shields.io/github/license/forsigner/checkok.svg)](https://github.com/forsigner/checkok/blob/master/LICENSE)

> a lib

## Installation

```sh
yarn add checkok
```

## Usage

```js
import { check } from 'checkok'
import { string, required, email } from 'checkok/rules'

const result = check('foo').pipe(
  string(),
  required(),
  email(),
)

console.log(result) // { ok: true }
```

## License

[MIT License](https://github.com/forsigner/checkok/blob/master/LICENSE)

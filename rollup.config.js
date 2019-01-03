import typescript from 'rollup-plugin-typescript2'
import fs from 'fs'
import path from 'path'

import pkg from './package.json'

const rulesFiles = fs
  .readdirSync(path.join(__dirname, 'src/rules'))
  .map(f => `rules/${f.replace('.ts', '')}`)

const files = ['index', ...rulesFiles]
console.log('files:', files)

const plugins = [
  typescript({
    rollupCommonJSResolveHack: true,
  }),
]

const getOutput = file => {
  if (file === 'index') {
    return [
      {
        file: `dist/${file}.js`,
        format: 'cjs',
        exports: 'named',
        sourcemap: true,
      },
      {
        file: `dist/${file}.es.js`,
        format: 'es',
        exports: 'named',
        sourcemap: true,
      },
    ]
  }
  return [
    {
      file: `${file}.js`,
      format: 'cjs',
      exports: 'named',
      sourcemap: true,
    },
  ]
}

export default files.map(file => ({
  input: `src/${file}.ts`,
  output: getOutput(file),
  plugins,
}))

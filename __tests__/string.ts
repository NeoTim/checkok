import { check } from '../src'
import string from '../src/string'

const MSG = 'should string'

test('string() success', () => {
  const result = check('foo').pipe(string(MSG))
  expect(result.pass).toBe(true)
})

test('string() fail', () => {
  const result = check(1).pipe(string(MSG))
  expect(result.pass).toBe(false)
  expect(result.message).toBe(MSG)
})

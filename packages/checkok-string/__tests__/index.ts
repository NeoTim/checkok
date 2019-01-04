import { check } from 'checkok'
import string from '../src'

const msg = 'should a string'

test('string() success', () => {
  const result = check('foo').pipe(string(msg))
  expect(result.ok).toBe(true)
})

test('string() fail', () => {
  const result = check(1).pipe(string(msg))
  expect(result.ok).toBe(false)
  expect(result.message).toBe(msg)
})

import { check } from 'checkok'
import max from '../src'

const msg = 'max error message'

test('string: max() success', () => {
  const result = check('foo').pipe(max(3, msg))
  expect(result.ok).toBe(true)
})

test('string: max() success short', () => {
  const result = check('f').pipe(max(3, msg))
  expect(result.ok).toBe(true)
})

test('string: max() fail', () => {
  const result = check('foooo').pipe(max(3, msg))
  expect(result.ok).toBe(false)
  expect(result.message).toBe(msg)
})

test('number: max() success', () => {
  const result = check(3).pipe(max(3, msg))
  expect(result.ok).toBe(true)
})

test('number: max() success small', () => {
  const result = check(1).pipe(max(3, msg))
  expect(result.ok).toBe(true)
})

test('number() fail', () => {
  const result = check(100).pipe(max(3, msg))
  expect(result.ok).toBe(false)
  expect(result.message).toBe(msg)
})

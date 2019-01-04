import { check } from 'checkok'
import min from '../src'

const msg = 'min error message'

test('string: min() success', () => {
  const result = check('foo').pipe(min(3, msg))
  expect(result.ok).toBe(true)
})

test('string: min() success long', () => {
  const result = check('fooooo').pipe(min(3, msg))
  expect(result.ok).toBe(true)
})

test('string: min() fail', () => {
  const result = check('f').pipe(min(3, msg))
  expect(result.ok).toBe(false)
  expect(result.message).toBe(msg)
})

test('number: min() success', () => {
  const result = check(3).pipe(min(3, msg))
  expect(result.ok).toBe(true)
})

test('number: min() success big', () => {
  const result = check(1000).pipe(min(3, msg))
  expect(result.ok).toBe(true)
})

test('number() fail', () => {
  const result = check(1).pipe(min(3, msg))
  expect(result.ok).toBe(false)
  expect(result.message).toBe(msg)
})

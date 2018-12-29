import { check } from '../src'
import number from '../src/number'

const msg = 'should a number'

test('number() success', () => {
  const result = check(10).pipe(number(msg))
  expect(result.ok).toBe(true)
})

test('number() fail', () => {
  const result = check('foo').pipe(number(msg))
  expect(result.ok).toBe(false)
  expect(result.message).toBe(msg)
})

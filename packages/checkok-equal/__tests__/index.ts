import { check } from 'checkok'
import equal from '../src'

const msg = 'should be equal'

test('equal for string', () => {
  const result = check('foo').pipe(equal('foo', msg))
  expect(result.ok).toBe(true)
})

test('equal for number', () => {
  const result = check(100).pipe(equal(100, msg))
  expect(result.ok).toBe(true)
})

test('not equal', () => {
  const result = check('foo').pipe(equal(100, msg))
  expect(result.ok).toBe(false)
  expect(result.message).toBe(msg)
})

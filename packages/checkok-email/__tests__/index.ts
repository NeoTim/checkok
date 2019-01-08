import { check } from 'checkok'
import email from '../src'

const msg = 'should a email'

test('email() success', () => {
  const result = check('foo@bar.com').pipe(email(msg))
  expect(result.ok).toBe(true)
})

test('email() fail', () => {
  const result = check(1).pipe(email(msg))
  expect(result.ok).toBe(false)
  expect(result.message).toBe(msg)
})

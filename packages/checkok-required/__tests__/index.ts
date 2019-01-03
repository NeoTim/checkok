import { check } from 'checkok'
import required from 'checkok-required'

test('required() success', () => {
  const result = check('foo').pipe(required('required'))
  expect(result.ok).toBe(true)
})

test('required() fail', () => {
  const result = check('').pipe(required('required'))
  expect(result.ok).toBe(false)
  expect(result.message).toBe('required')
})

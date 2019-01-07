import isEmail from '../src'

test('is email', () => {
  expect(isEmail('foo@bar.com')).toBe(true)
})

test('not email', () => {
  expect(isEmail('foo')).toBe(false)
})

import isEmail from '../src'

test('is email', () => {
  expect(isEmail('foo@bar.com')).toBe(true)
})

test('not email', () => {
  expect(isEmail('foo')).toBe(false)
})

test('number is not email', () => {
  expect(isEmail(111)).toBe(false)
})

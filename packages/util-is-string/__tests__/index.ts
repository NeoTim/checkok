import isString from '../src'

test('sting', () => {
  expect(isString('foo')).toBe(true)
})

test('not a string', () => {
  expect(isString(100)).toBe(false)
})

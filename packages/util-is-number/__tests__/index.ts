import isNumber from '../src'

test('number', () => {
  expect(isNumber(100)).toBe(true)
})

test('not a number', () => {
  expect(isNumber('foo')).toBe(false)
})

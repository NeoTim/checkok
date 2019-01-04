import isArray from '../src'

test('array', () => {
  expect(isArray(['foo'])).toBe(true)
})

test('not array', () => {
  expect(isArray('foo')).toBe(false)
})

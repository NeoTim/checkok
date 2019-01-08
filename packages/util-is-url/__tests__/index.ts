import isUrl from '../src'

test('is url', () => {
  expect(isUrl('http://google.com')).toBe(true)
})

test('not url', () => {
  expect(isUrl('foo')).toBe(false)
})

test('number is not url', () => {
  expect(isUrl('google')).toBe(false)
})

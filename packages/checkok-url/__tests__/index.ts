import { check } from 'checkok'
import url from '../src'

const msg = 'should be a url'

test('url() success', () => {
  const result = check('http://google.com').pipe(url(msg))
  expect(result.ok).toBe(true)
})

test('url() fail', () => {
  const result = check('google').pipe(url(msg))
  expect(result.ok).toBe(false)
  expect(result.message).toBe(msg)
})

import result from '../src'

test('ok', () => {
  const r = result(true)
  expect(r.ok).toBe(true)
})

test('not ok', () => {
  const r = result(false, 'not ok')
  expect(r.ok).toBe(false)
  expect(r.message).toBe('not ok')
})

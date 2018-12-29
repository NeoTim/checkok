const required = (message?: string) => (value: any) => {
  if (`${value}`.length) return { ok: true }

  return { ok: false, message: message || '' }
}
export default required

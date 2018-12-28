const required = (message: string) => (value: any) => {
  if (`${value}`.length) {
    return { pass: true }
  }
  return { pass: false, message: message || '' }
}
export default required

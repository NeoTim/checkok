const string = (message?: string) => (value: any) => {
  if (typeof value === 'string') {
    return { pass: true }
  }
  return { pass: false, message: message || '' }
}
export default string

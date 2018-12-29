const isString = (value: any) => {
  return Object.prototype.toString.call(value) === '[object String]'
}

const string = (message?: string) => (value: any) => {
  if (isString(value)) return { ok: true }
  return { ok: false, message: message || '' }
}
export default string

const isNumber = (value: any) => {
  return Object.prototype.toString.call(value) === '[object Number]'
}

const number = (message?: string) => (value: any) => {
  if (isNumber(value)) return { ok: true }

  return { ok: false, message: message || '' }
}

export default number

const isNumber = (value: any) => {
  return Object.prototype.toString.call(value) === '[object Number]'
}

export default isNumber

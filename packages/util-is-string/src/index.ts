const isString = (value: any) => {
  return Object.prototype.toString.call(value) === '[object String]'
}

export default isString

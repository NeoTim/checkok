const isArray = (value: any) => {
  if (Array.isArray) return Array.isArray(value)
  return Object.prototype.toString.call(value) === '[object Array]'
}

export default isArray

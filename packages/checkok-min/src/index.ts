import isString from 'util-is-string'
import isNumber from 'util-is-number'
import result from 'util-result'

export default (min: number, message?: string) => (value: any) => {
  let len: number
  if (isString(value)) {
    len = value.length
  } else if (isNumber(value)) {
    len = value
  } else {
    throw new Error('Value should be string or number ')
  }

  return result(len >= min, message)
}

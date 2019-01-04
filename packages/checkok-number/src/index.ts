import isNumber from 'util-is-number'
import result from 'util-result'

const number = (message?: string) => (value: any) => {
  return result(isNumber(value), message)
}

export default number

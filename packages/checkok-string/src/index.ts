import isString from 'util-is-string'
import result from 'util-result'

const string = (message?: string) => (value: any) => {
  return result(isString(value), message)
}
export default string

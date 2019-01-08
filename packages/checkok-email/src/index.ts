import isEmail from 'util-is-email'
import result from 'util-result'

const email = (message?: string) => (value: any) => {
  return result(isEmail(value), message)
}
export default email

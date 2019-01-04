import result from 'util-result'

const required = (message?: string) => (value: any) => {
  return result(!!`${value}`.length, message)
}
export default required

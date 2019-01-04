import result from 'util-result'

const equal = (target: any, message?: string) => (value: any) => {
  return result(value === target, message)
}
export default equal

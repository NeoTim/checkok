import isUrl from 'util-is-url'
import result from 'util-result'

const url = (message?: string) => (value: any) => {
  return result(isUrl(value), message)
}
export default url

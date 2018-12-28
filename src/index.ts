interface Result {
  pass: boolean
  message?: string
}

type Fn<Value> = (value: Value) => Result

export const check = <Value extends any>(value: Value) => {
  return {
    pipe: (...args: Array<Fn<Value>>): Result => {
      let result: Result = { pass: true }

      for (const fn of args) {
        const fnValue = fn(value)
        if (!fnValue.pass) {
          result = fnValue
          break
        }
      }

      return result
    },
  }
}

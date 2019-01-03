interface Result {
  ok: boolean
  message?: string
}

type Fn<Value> = (value: Value) => Result

const check = <Value extends any>(value: Value) => {
  return {
    pipe: (...args: Array<Fn<Value>>): Result => {
      let result: Result = { ok: true }

      for (const fn of args) {
        const fnValue = fn(value)
        if (!fnValue.ok) {
          result = fnValue
          break
        }
      }

      return result
    },
  }
}

export { check }

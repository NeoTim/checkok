export default function result(ok: boolean, message?: string) {
  if (ok) return { ok: true }
  return { ok: false, message: message || '' }
}

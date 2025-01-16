export function isEmpty(object: object | [] | null | undefined | Record<string, unknown>) {
  if (object === null || object === undefined) {
    return true
  } else if (Array.isArray(object) && object.length === 0) {
    return true
  } else if (typeof object === 'object' && Object.keys(object).length === 0) {
    return true
  }
}

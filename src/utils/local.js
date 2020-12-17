export const setLocal = (key, value) => {
  localStorage.setItem(key, typeof value === 'object' ? JSON.stringify(value) : value)
}
export const getLocal = (key, isObject) => {
  if (isObject) {
    return JSON.parse(localStorage.getItem(key)) || {}
  }
  return localStorage.getItem(key) || ''
}

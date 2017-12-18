const every = (fn, array) => {
  if (typeof fn !== 'function') throw new TypeError()

  return !array.length
  ? true
  : (fn(array[0]) ? every(fn, array.slice(1)) : false)
}

module.exports = { every }

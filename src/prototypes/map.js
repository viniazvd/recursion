const map = (fn, array) => {
  if (typeof fn !== 'function') throw new TypeError()
  if (array.length < 0) throw new TypeError()

  return !array.length
    ? []
    : [fn(array[0])].concat(map(fn, array.slice(1)))
}

module.exports = map

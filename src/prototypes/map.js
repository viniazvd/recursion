const { empty } = require('../utils')

const map = (fn, array) => {
  if (typeof fn !== 'function') throw new TypeError()
  if (!empty(array) < 0) throw new TypeError()

  return empty(array)
    ? []
    : [fn(array[0])].concat(map(fn, array.slice(1)))
}

module.exports = map

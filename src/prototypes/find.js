const empty = require('../utils/empty')

const find = (fn, array) => {
  if (typeof fn !== 'function') throw new TypeError()

  return empty(array)
    ? undefined
    : fn(array[0]) ? array[0] : find(fn, array.slice(1))
}

module.exports = find

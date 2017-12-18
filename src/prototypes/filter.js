const empty = require('../utils/empty')
const len = require('./len')

const isEqual = x => x === 10

const countRepeated = (find, array) => len(filter(isEqual, array))

const filter = (fn, array) => {
  if (typeof fn !== 'function') throw new TypeError()
  if (!empty(array) < 0) throw new TypeError()

  return empty(array)
    ? []
    : (fn(array[0]) ? [array[0]] : []).concat(filter(fn, array.slice(1)))
}

module.exports = { countRepeated, filter }

const { len } = require('../utils')

const isEqual = x => x === 10

const countRepeated = (find, array) => len(filter(isEqual, array))

const filter = (fn, array) => {
  if (typeof fn !== 'function') throw new TypeError()
  if (array.length < 0) throw new TypeError()

  return !array.length
    ? []
    : (fn(array[0]) ? [array[0]] : []).concat(filter(fn, array.slice(1)))
}

module.exports = { countRepeated, filter }

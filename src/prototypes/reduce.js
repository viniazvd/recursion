const empty = require('../utils/empty')

const reduce = (array, fn, acc = null) => {
  if (array === null) throw new TypeError('Array.prototype.reduce chamado é nulo (null) ou indefinido (undefined)')
  if (typeof fn !== 'function') throw new TypeError(fn + ' não é uma função')

  return array.length === 1 || empty(array)
    ? acc
    : array[1] !== undefined
      ? reduce(array.slice(1), fn,
        acc === null
          ? (acc += fn(array[0], array[1]))
          : (acc += fn(acc, array[1]) - acc))
      : []
}

module.exports = reduce

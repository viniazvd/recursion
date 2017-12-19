const empty = require('../utils/empty')

const find = (fn, array) => {
  if (typeof fn !== 'function') throw new TypeError()

  return empty(array)
    ? []
    : fn(array[0]) ? [array[0]] : [array[0]].concat(find(fn, array.slice(1)))[1]
}

module.exports = find

const empty = require('../utils/empty')

const shift = array => {
  return empty(array)
    ? []
    : array.length > 1
      ? [array[1]].concat(shift(array.slice(1)))
      : []
}

module.exports = shift

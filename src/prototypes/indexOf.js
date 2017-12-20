const empty = require('../utils/empty')

const indexOf = (value, array, index = 0) => {
  return empty(array)
    ? -1
    : array[0] === value ? index : indexOf(value, array.slice(1), index + 1)
}

module.exports = indexOf

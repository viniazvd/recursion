const empty = require('../utils/empty')

const indexOf = (value, array) => {
  return empty(array)
    ? -1
    : array[0] === value ? array[0] : indexOf(value, array.slice(1))
}

module.exports = indexOf

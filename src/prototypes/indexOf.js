const empty = require('../utils/empty')

const indexOf = (value, array, index = 0) => {
  if (!array.includes(value)) return -1
  if (empty(array)) return -1

  return array[index] === value ? index : indexOf(value, array, index + 1)
}

module.exports = indexOf

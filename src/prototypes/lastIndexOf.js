const empty = require('../utils/empty')

const lastIndexOf = (value, array, index = 0, arrayIndex = []) => {
  return empty(array)
    ? arrayIndex.sort((x, y) => y - x)[0] || -1
    : array[0] === value
      ? lastIndexOf(value, array.slice(1), index + 1, arrayIndex.concat(index))
      : lastIndexOf(value, array.slice(1), index + 1, arrayIndex)
}

module.exports = lastIndexOf

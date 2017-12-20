const empty = require('../utils/empty')
const { filter } = require('./filter')

const lastIndexOf = (value, array, index = 0, found = 0) => {
  if (!array.includes(value)) return -1
  if (empty(array)) return -1
  const countRepeat = filter(x => x === value, array).length

  return countRepeat === found || array.length === index
    ? index - 1
    : array[index] === value
      ? lastIndexOf(value, array, index + 1, found + 1)
      : lastIndexOf(value, array, index + 1, found)
}

module.exports = lastIndexOf

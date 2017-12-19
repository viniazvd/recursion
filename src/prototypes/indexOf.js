const find = require('./find')

const indexOf = (value, array) => {
  return !find(x => x === value, array)
  ? -1
  : array.findIndex(x => x === value)
}

module.exports = indexOf

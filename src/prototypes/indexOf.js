const find = require('./find')
const isEqual = x => y => x === y

const indexOf = (value, array) => {
  return !find(isEqual(value), array)
  ? -1
  : array.findIndex(isEqual(value))
}

module.exports = indexOf

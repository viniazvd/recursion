const empty = require('../utils/empty')

const fill = (array, value) => {
  return empty(array)
  ? array
  : [array[0] === value ? value : value].concat(fill(array.slice(1), value))
}

module.exports = fill

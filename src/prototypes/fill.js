const empty = require('../utils/empty')
const map = require('./map')

const fill = (array, value) => {
  return empty(array)
  ? array
  : [value].concat(fill(array.slice(1), value))
}

const fill2 = (array, value) => {
  return map(x => value, array)
}

module.exports = { fill, fill2 }

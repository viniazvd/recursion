const empty = require('../utils/empty')

const unshift = (array, value) => {
  return empty(array)
  ? []
  : value ? [value].concat([array[0]].concat(unshift(array.slice(1)))) : [array[0]].concat(unshift(array.slice(1)))
}

module.exports = unshift

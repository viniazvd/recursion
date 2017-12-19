const empty = require('../utils/empty')

const push = (array, value) => {
  return empty(array)
  ? value ? array.concat(value) : []
  : [array[0]].concat(push(array.slice(1), value))
}

module.exports = push

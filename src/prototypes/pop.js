const empty = require('../utils/empty')

const pop = (array) => {
  return empty(array) || array.length <= 1
  ? []
  : [array[0]].concat(pop(array.slice(1)))
}

module.exports = pop

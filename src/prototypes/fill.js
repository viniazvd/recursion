const map = require('./map')

const fill = (array, value) => {
  return map(x => value, array)
}

module.exports = fill

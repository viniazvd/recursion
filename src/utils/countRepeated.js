const len = require('../prototypes/len')
const filter = require('../prototypes/filter')
const isEqual = x => x === 10

const countRepeated = (find, array) => len(filter(isEqual, array))

module.exports = countRepeated

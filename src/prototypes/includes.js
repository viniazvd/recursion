const some = require('./some')

const includes = (array, value) => some(x => x === value, array)

module.exports = includes

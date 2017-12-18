const len = array => !array.length ? 0 : 1 + len(array.slice(1))

const empty = array => !array.length

module.exports = { len, empty }

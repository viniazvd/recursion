const len = array => !array.length ? 0 : 1 + len(array.slice(1))

module.exports = { len }

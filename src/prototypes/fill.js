const fill = (array, value) => {
  return !array.length
  ? array
  : [array[0] === value ? value : value].concat(fill(array.slice(1), value))
}

module.exports = fill

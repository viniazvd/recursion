const pop = (array) => {
  return !array.length
  ? []
  : array.length > 1 ? [array[0]].concat(pop(array.slice(1))) : []
}

module.exports = pop

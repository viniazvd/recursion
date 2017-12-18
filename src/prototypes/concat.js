const concat = (array1, array2) => {
  return !array1.length
  ? array2
  : [array1[0], ...concat(array1.splice(1), array2)]
}

module.exports = concat

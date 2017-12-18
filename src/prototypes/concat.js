const concat = (array1, array2) => {
  if (!array2.length) {
    return array1
  } else {
    array1.push(array2[0])
    array2.shift()
    return concat(array1, array2)
  }
}

module.exports = concat

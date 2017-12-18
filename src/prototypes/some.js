const some = (fn, array) => {
  if (typeof fn !== 'function') throw new TypeError()

  // return !array.length
  // ? []
  // : (fn(array[0]) ? [true] : [false]).concat(some(fn, array.slice(1))).includes(true)

  return !array.length
  ? false
  : (fn(array[0]) ? true : some(fn, array.slice(1)))
}

module.exports = some

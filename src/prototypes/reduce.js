const empty = require('../utils/empty')
const array = [0, 1, 2, 3, 4, 5]

const reduce = (array, fn, acc = 0) => {
  if (array === null) throw new TypeError('Array.prototype.reduce chamado é nulo (null) ou indefinido (undefined)')
  if (typeof fn !== 'function') throw new TypeError(fn + ' não é uma função')

  return array.length === 1 || empty(array)
    ? acc
    : array[1] !== undefined
      ? reduce(array.slice(1), fn, acc === 0 ? (acc += fn(array[0], array[1])) : (acc += fn(acc - acc, array[1])))
      : 'refatorar aqui...'
}
console.log(reduce(array, (acc, cur) => acc + cur))

const reduceTest = array.reduce((acc, cur) => acc + cur)
console.log(reduceTest) // 15

module.exports = reduce

// primeira chamada   0  1   [0, 1, 2, 3, 4, 5]  1
// segunda chamada    1  2   [1, 2, 3, 4, 5]     3
// terceira chamada   3  3   [2, 3, 4, 5]        6
// quarta chamada     6  4   [3, 4, 5]           10
// quinta chamada     10 5   [4, 5]              15
// ok

// primeira chamada   0  1   [1, 2, 3, 4]        1
// segunda chamada    1  3   [2, 3, 4]           3
// terceira chamada   3  4   [3, 4]              7
// quarta chamada     7  5   [4]                 12
// quinta chamada     10 5   [5]                 15

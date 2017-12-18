const concat = require('../prototypes/concat')

describe('concat', () => {
  it('empty array1', () => {
    expect(concat([], [1, 2, 3])).toEqual([1, 2, 3])
  })

  it('empty array2', () => {
    expect(concat([1, 2, 3], [])).toEqual([1, 2, 3])
  })

  it('arrays empty', () => {
    expect(concat([], [])).toEqual([])
  })

  it('when is valid', () => {
    expect(concat([1, 2, 3], [4, 5, 6])).toEqual([1, 2, 3, 4, 5, 6])
  })
})

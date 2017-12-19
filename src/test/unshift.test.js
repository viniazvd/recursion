const unshift = require('../prototypes/unshift')

describe('unshift', () => {
  it('array empty', () => {
    expect(unshift([], 1)).toEqual([])
  })

  it('when is valid with one value', () => {
    expect(unshift([2, 3, 4, 5], 1)).toEqual([1, 2, 3, 4, 5])
  })

  it('when is valid with one or more values', () => {
    expect(unshift([2, 3, 4, 5], 0, 1)).toEqual([0, 1, 2, 3, 4, 5])
  })
})

const unshift = require('../prototypes/unshift')

describe('unshift', () => {
  it('array empty', () => {
    expect(unshift([], 1)).toEqual([])
  })

  it('when is valid', () => {
    expect(unshift([2, 3, 4, 5], 1)).toEqual([1, 2, 3, 4, 5])
  })
})

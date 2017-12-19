const shift = require('../prototypes/shift')

describe('shift', () => {
  it('array empty', () => {
    expect(shift([])).toEqual([])
  })

  it('when is valid', () => {
    expect(shift([1, 2, 3, 4, 5, 6])).toEqual([2, 3, 4, 5, 6])
  })
})

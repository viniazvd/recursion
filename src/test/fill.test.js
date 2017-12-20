const fill = require('../prototypes/fill')

describe('fill', () => {
  it('array empty', () => {
    expect(fill([])).toEqual([])
  })

  it('when is valid', () => {
    expect(fill([1, 2, 3], 4)).toEqual([4, 4, 4])
  })

  it('when the value is also inside', () => {
    expect(fill([1, 1, 1], 1)).toEqual([1, 1, 1])
  })
})

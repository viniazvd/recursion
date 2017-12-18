const fill = require('../prototypes/fill')

describe('fill', () => {
  it('array empty', () => {
    expect(fill([])).toEqual([])
  })

  it('when is valid', () => {
    expect(fill([1, 2, 3], 4)).toEqual([4, 4, 4])
  })
})

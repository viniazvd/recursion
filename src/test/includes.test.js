const includes = require('../prototypes/includes')

describe('includes', () => {
  it('array empty', () => {
    expect(includes([])).toEqual(false)
  })

  it('when is valid', () => {
    expect(includes([1, 2, 3], 2)).toEqual(true)
  })

  it('when the value is also inside', () => {
    expect(includes([1, 2, 3], 4)).toEqual(false)
  })
})

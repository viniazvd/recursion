const len = require('../prototypes/len')

describe('len', () => {
  it('when is valid', () => {
    expect(len([1, 2, 3, 4, 5])).toEqual(5)
  })

  it('empty array', () => {
    expect(len([])).toEqual(0)
  })
})

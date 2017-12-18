const pop = require('../prototypes/pop')

describe('pop', () => {
  it('array empty', () => {
    expect(pop([])).toEqual([])
  })

  it('when is valid', () => {
    expect(pop([1, 2, 3, 4, 5, 6])).toEqual([1, 2, 3, 4, 5])
  })
})

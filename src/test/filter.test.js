const filter = require('../prototypes/filter')

describe('filter', () => {
  const greaterThan2 = x => x > 2

  it('empty array', () => {
    expect(filter(greaterThan2, [])).toEqual([])
  })

  it('filter n elements', () => {
    expect(filter(greaterThan2, [1, 2, 3, 4, 5])).toEqual([3, 4, 5])
  })

  it('return empty', () => {
    expect(filter(greaterThan2, [1, 2])).toEqual([])
  })
})

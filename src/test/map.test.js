const { map } = require('../prototypes/map')

describe('map', () => {
  it('empty array', () => {
    const multiply2 = x => x * 2

    expect(map(multiply2, [])).toEqual([])
    expect(map(multiply2, [1, 2, 3])).toEqual([2, 4, 6])
  })
})

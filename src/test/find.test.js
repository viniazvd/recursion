const find = require('../prototypes/find')

describe('find', () => {
  const multiply2 = x => x === 2

  it('empty array', () => {
    expect(find(multiply2, [])).toEqual([])
  })

  it('multiply data by 2', () => {
    expect(find(multiply2, [1, 2, 3, 4, 5, 6])).toEqual(2)
  })
})

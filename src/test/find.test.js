const find = require('../prototypes/find')

describe('find', () => {
  const find2 = x => x === 2
  const find7 = x => x === 7

  it('empty array', () => {
    expect(find(find2, [])).toEqual([])
  })

  it('multiply data by 2', () => {
    expect(find(find2, [1, 2, 3, 4, 5, 6])).toEqual(2)
  })

  it('no founded value', () => {
    expect(find(find7, [1, 2, 3, 4, 5, 6])).toEqual([])
  })
})

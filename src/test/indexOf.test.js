const indexOf = require('../prototypes/indexOf')

describe('indexOf', () => {
  it('empty array', () => {
    expect(indexOf(3, [])).toEqual(-1)
  })

  it('find 2 in array', () => {
    expect(indexOf(2, [1, 2, 3, 4, 5, 6])).toEqual(2)
  })

  it('no founded value', () => {
    expect(indexOf(7, [1, 2, 3, 4, 5, 6])).toEqual(-1)
  })

  it('find correct index when the value isn\'t the index', () => {
    expect(indexOf(12, [10, 11, 12, 13, 14])).toEqual(2)
  })
})

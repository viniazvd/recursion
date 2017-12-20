const countRepeated = require('../utils/countRepeated')

describe('countRepeated', () => {
  it('empty array', () => {
    expect(countRepeated(10, [])).toEqual(0)
  })

  it('some repeated', () => {
    expect(countRepeated(10, [1, 2, 10, 1, 10, 10])).toEqual(3)
  })

  it('none repeated', () => {
    expect(countRepeated(10, [1, 2, 3, 4])).toEqual(0)
  })
})

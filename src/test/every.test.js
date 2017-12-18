const { len } = require('../utils')
const { every } = require('../prototypes/every')

describe('every', () => {
  it('empty array', () => {
    expect(len([])).toEqual(0)
  })
})

describe('every', () => {
  it('all data are less than 6', () => {
    const lessThan = x => x < 6

    expect(every(lessThan, [1, 2, 3, 4, 5])).toEqual(true)
  })
})

describe('every', () => {
  it('all data are greater than 2', () => {
    const lessThan = x => x > 2

    expect(every(lessThan, [1, 2, 3, 4, 5])).toEqual(false)
  })
})

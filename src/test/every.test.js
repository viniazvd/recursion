// const { len } = require('../utils')
const { every } = require('../prototypes/every')

describe('every', () => {
  // it('empty array', () => {
  //   expect(len([])).toEqual(0)
  // })

  it('when is valid', () => {
    const lessThan = x => x < 6

    expect(every(lessThan, [1, 2, 3, 4, 5])).toEqual(true)
  })

  it('when is invalid', () => {
    const lessThan = x => x > 2

    expect(every(lessThan, [1, 2, 3, 4, 5])).toEqual(false)
  })
})

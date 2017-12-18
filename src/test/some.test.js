// const { len } = require('../utils')
const { some } = require('../prototypes/some')

describe('some', () => {
  // it('empty array', () => {
  //   expect(len([])).toEqual(0)
  // })

  it('when is valid', () => {
    const fn = x => x < 4

    expect(some(fn, [1, 2, 3, 4, 5])).toEqual(true)
  })

  it('when is invalid', () => {
    const fn = x => x > 6

    expect(some(fn, [1, 2, 3, 4, 5])).toEqual(false)
  })
})

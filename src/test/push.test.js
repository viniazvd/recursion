const push = require('../prototypes/push')

describe('push', () => {
  it('array empty and no value', () => {
    expect(push([])).toEqual([])
  })

  it('array empty and value', () => {
    expect(push([], 1)).toEqual([1])
  })

  it('when is valid with one value', () => {
    expect(push([1, 2, 3, 4, 5], 6)).toEqual([1, 2, 3, 4, 5, 6])
  })

  it('when is valid with one or more values', () => {
    expect(push([1, 2, 3, 4, 5], 6, 7)).toEqual([1, 2, 3, 4, 5, 6, 7])
  })
})

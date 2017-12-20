const reduce = require('../prototypes/reduce')

describe('reduce', () => {
  const sum = (acc, cur) => acc + cur
  const subtraction = (acc, cur) => acc - cur
  const multiplication = (acc, cur) => acc * cur
  const division = (acc, cur) => acc / cur

  it('sum', () => {
    expect(reduce([1, 2, 3, 4, 5], sum)).toEqual(15)
  })

  it('subtraction', () => {
    expect(reduce([1, 2, 3, 4, 5], subtraction)).toEqual(-13)
  })

  it('multiplication', () => {
    expect(reduce([1, 2, 3, 4, 5], multiplication)).toEqual(120)
  })

  it('division', () => {
    expect(reduce([1, 2, 3, 4, 5], division)).toEqual(0.008333333333333331)
  })
})

const len = require('../prototypes/len')
const { filter, countRepeated } = require('../prototypes/filter')

describe('len', () => {
  it('empty array', () => {
    expect(len([])).toEqual(0)
  })

  it('n elements', () => {
    expect(len([1, 2, 3])).toEqual(3)
  })
})

describe('filter', () => {
  const greaterThan2 = x => x > 2

  it('empty array', () => {
    expect(filter(greaterThan2, [])).toEqual([])
  })

  it('filter n elements', () => {
    expect(filter(greaterThan2, [1, 2, 3, 4, 5])).toEqual([3, 4, 5])
  })

  it('return empty', () => {
    expect(filter(greaterThan2, [1, 2])).toEqual([])
  })
})

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

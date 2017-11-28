const mergeSortTopDown = require('../problems/mergeSortTopDown')
const chai = require('chai')
let expect = chai.expect

describe('Merge Sort(Top-Down Implemention)', function() {

  it('produces desired result with', function() {
    let result = mergeSortTopDown([9, 2, 5, 6, 4, 3, 7, 10, 1, 8])
    expect(result).to.deep.equal([1, 2, 3, 4, 5, 6, 7, 8, 9, 10])
  })
})


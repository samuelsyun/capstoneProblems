const bubbleSort = require('../problems/bubbleSort')
const chai = require('chai')
let expect = chai.expect

describe('Bubble Sort', function() {

  it('produces desired result with', function() {
    let result = bubbleSort([1, 4, 5, 9, 10, 3, 7, 8, 2, 6])
    expect(result).to.deep.equal([1, 2, 3, 4, 5, 6, 7, 8, 9, 10])
  })
})


const insertionSort = require('../problems/insertionSort')
const chai = require('chai')
let expect = chai.expect

describe('Insertion Sort', function() {

  it('produces desired result with', function() {
    let result = insertionSort([9, 2, 5, 6, 4, 3, 7, 10, 1, 8])
    expect(result).to.deep.equal([1, 2, 3, 4, 5, 6, 7, 8, 9, 10])
  })
})


const nthLargest = require('../problems/array_nthLargest')
const chai = require('chai')
let expect = chai.expect

describe('nth Largest ', function() {

  it('produces desired result with', function() {
    let result = nthLargest([ 43, 56, 23, 89, 88, 90, 99, 652], 4)
    expect(result).to.deep.equal(89)
  })

  it('produces desired result with', function() {
    let result = nthLargest([10, 20, 30, 40, 50], 5)
    expect(result).to.deep.equal(10)
  })
})


const dutchFlag = require('../problems/facebook_dutchFlagSort')
const chai = require('chai')
let expect = chai.expect

describe('Dutch Flag Sort', function() {

  it('produces desired result with', function() {
    let result = dutchFlag([2, 2, 0, 1, 0, 0, 1, 2])
    expect(result).to.deep.equal([0, 0, 0, 1, 1, 2, 2, 2])
  })
})


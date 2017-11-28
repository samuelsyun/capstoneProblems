const duplicatesHash = require('../problems/facebook_duplicatesHash')
const chai = require('chai')
let expect = chai.expect

describe('Find Duplicate', function() {

  it('produces desired result using Hash Table', function() {
    let result = duplicatesHash([1, 21, -4, 103, 21, 4, 1])
    expect(result.sort()).to.deep.equal([1, 21])
  })
})

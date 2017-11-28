const duplicates = require('../problems/microsoft_findDuplicate')
const chai = require('chai')
let expect = chai.expect

describe('Find Duplicate', function() {

  it('produces desired result with', function() {
    let result = duplicates([0,2,0,1,3,3])
    expect(result).to.deep.equal([0, 3])
  })
})

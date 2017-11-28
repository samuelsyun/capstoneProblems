const countSteps = require('../problems/google_countingSteps')
const chai = require('chai')
let expect = chai.expect

describe('Power Set Solution', function() {

  it('produces desired result', function() {
    let result = countSteps(6)
    expect(result).to.deep.equal(13)
  })
})


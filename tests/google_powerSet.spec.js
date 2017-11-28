const powerSet = require('../problems/google_powerSet')
const chai = require('chai')
let expect = chai.expect

describe('Power Set Solution', function() {

  it('produces desired result', function() {
    let result = powerSet([1, 2, 3])
    expect(result.length).to.deep.equal(8)
  })
})


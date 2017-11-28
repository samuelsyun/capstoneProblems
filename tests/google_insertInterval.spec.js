const insertInterval = require('../problems/google_insertInterval')
const chai = require('chai')
let expect = chai.expect

describe('Insert Interval Solution', function() {

  it('produces desired result', function() {
    let result = insertInterval([[1, 5],[10, 15],[20, 25]], [12, 27])
    expect(result.length).to.deep.equal(2)
    expect(result).to.deep.equal([[1, 5], [10, 27]])
  })
})


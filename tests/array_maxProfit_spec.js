const maxProfit = require('../problems/array_maxProfit')
const chai = require('chai')
let expect = chai.expect

describe('Max Profit ', function() {

  it('produces desired result with', function() {
    let result = maxProfit([44, 30, 24, 32, 35, 30, 40, 38, 15])
    expect(result).to.deep.equal(16)
  })

  it('produces desired result with', function() {
    let result = maxProfit([50, 45, 40, 30])
    expect(result).to.deep.equal(-1)
  })

  it('produces desired result with', function() {
    let result = maxProfit([50, 45, 40, 30, 30])
    expect(result).to.deep.equal(0)
  })
})


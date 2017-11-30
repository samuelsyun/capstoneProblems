const movePosition = require('../problems/array_movePosition')
const chai = require('chai')
let expect = chai.expect

describe('Move Position', function() {

  it('produces desired result with', function() {
    let result = movePosition([10, 20, 30, 40, 50], 0, 2)
    expect(result).to.deep.equal([20, 30, 10, 40, 50])
  })

  it('produces desired result with', function() {
    let result = movePosition([10, 20, 30, 40, 50], -1, -2)
    expect(result).to.deep.equal([10, 20, 30, 50, 40])
  })
})


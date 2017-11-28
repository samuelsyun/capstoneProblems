const twoSumNaive = require('../problems/google_subsetSum')
const twoSum = require('../problems/google_subsetSum')
const chai = require('chai')
let expect = chai.expect

describe('Two Sum Naive Solution', function() {

  it('produces desired result', function() {
    let result = twoSumNaive([3, 5, 2, -4, 8, 11], 7)
    expect(result.length).to.deep.equal(2)
    expect(result).to.deep.equal([[5, 2], [-4, 11]])
  })
})

describe('Two Sum Better Solution', function() {

    it('produces desired result', function() {
      let result = twoSum([3, 5, 2, -4, 8, 11], 7)
      expect(result.length).to.deep.equal(2)
      expect(result).to.deep.equal([[5, 2], [-4, 11]])
    })
  })


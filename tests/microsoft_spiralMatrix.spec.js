const spiralMatrix = require('../problems/microsoft_spiralMatrix')
const chai = require('chai')
let expect = chai.expect

describe('Spiral Matrix', function() {

  it('produces desired result with', function() {
    let result = spiralMatrix([[1, 2, 3], [4, 5, 6], [7, 8, 9]])
    expect(result).to.deep.equal(['1,2,3,6,9,8,7,4,5'])
  })
})

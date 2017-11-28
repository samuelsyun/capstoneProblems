const Stack = require('../problems/stack')
const chai = require('chai')
let expect = chai.expect

describe('Stack', function() {

  let stack
  beforeEach(function() {
    stack = new Stack()
  })

  it('push method works correct', function() {
    stack.push(1)
    stack.push(3)
    stack.push(5)

    expect(stack.stack.length).to.deep.equal(3)
  })

  it('in correct order, LIFO', function() {
    stack.push(1)
    stack.push(3)
    stack.push(5)
    stack.push(7)
    const popped = stack.pop()

    expect(popped).to.deep.equal(7)
    expect(stack.stack[0]).to.deep.equal(1)
    expect(stack.stack[2]).to.deep.equal(5)
  })

})

const Queue = require('../problems/queue')
const chai = require('chai')
let expect = chai.expect

describe('Queue', function() {

  let queue
  beforeEach(function() {
    queue = new Queue()
  })

  it('enqueue method works correct', function() {
    queue.enqueue(1)
    queue.enqueue(3)
    queue.enqueue(5)

    expect(queue.queue.length).to.deep.equal(3)
  })

  it('in correct order, FIFO', function() {
    queue.enqueue(1)
    queue.enqueue(3)
    queue.enqueue(5)
    queue.enqueue(7)
    const dequeued = queue.dequeue()

    expect(dequeued).to.deep.equal(1)
    expect(queue.queue[0]).to.deep.equal(3)
    expect(queue.queue[2]).to.deep.equal(7)
  })

})

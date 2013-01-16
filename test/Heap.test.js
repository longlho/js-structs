var assert = require("assert")
	, Heap = require('../src/Heap');
describe('Heap', function () {
  describe('#peek()', function () {
  	it('should return undefined when heap is empty', function () {
    	assert.equal(undefined, new Heap().peek());
    });
    it('should return correct value when heap has elements 100 and 1', function () {
    	var heap = new Heap();
    	heap.insert(100, 1);
    	heap.insert(1, 5);
    	assert.equal(5, heap.peek());
    });
    it('should return correct value when heap has elements 10, 12, 15, 100', function () {
    	var heap = new Heap();
    	heap.insert(100, 1);
    	heap.insert(10, 'top');
    	heap.insert(15, 88);
    	heap.insert(12, 'test');
    	assert.equal('top', heap.peek());
    });
  });
});

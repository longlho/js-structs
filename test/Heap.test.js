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
  describe('#size()', function () {
    it('should return 0 when heap is empty', function () {
      assert.equal(0, new Heap().size());
    });
    it('should return 2 when heap has 2 elements', function () {
      var heap = new Heap();
      heap.insert(100, 1);
      heap.insert(1, 5);
      assert.equal(2, heap.size());
    });
  });
  describe('#insert()', function () {
    it('should throw error when trying to insert null or undefined keys', function () {
      var heap = new Heap();
      assert.throws(function () {
        heap.insert(null, 0);
      }, Error);
      assert.throws(function () {
        heap.insert(undefined, 0);
      }, Error);
    });
  });
  describe('#insertAll()', function () {
    it('should be able to insertAll an object', function () {
      var heap = new Heap({ 1: 1, 2: 2});
      assert.equal(2, heap.size());
    });
    it('should be able to insertAll an array of nodes', function () {
      var heap = new Heap([
        { key: 1, value: 1 },
        { key: 2, value: 2 }
        ])
      assert.equal(2, heap.size());
    });
    it('should be able to insertAll another Heap', function () {
      var heap = new Heap([
        { key: 1, value: 1 },
        { key: 2, value: 2 }
        ])
      assert.equal(2, new Heap(heap).size());
    });
  });
});

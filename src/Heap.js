(function () {

	var Utils = this.Utils || require('./Utils');

	var Heap = function (heap) {
		var _nodes
			, self = this;

		//Initialization
		var _init = function () {
			_nodes = [];			
			if (heap) {
				self.insertAll(heap);
			}
		};

		//Insert all elements in `nodes` into the current heap.
		//Nodes can be a Heap, an array or an object.
		this.insertAll = function (nodes) {
			//If nodes is already a Heap, great
			if (nodes instanceof Heap) {
				var keys = nodes.keys()
					, values = nodes.values();
				//Short-circuit this since we have no elements
				if (self.size() === 0) {
					for (var i = 0; i < keys.length; i++) {
						_nodes.push({ key: keys[i], value: values[i] });
					}
				}
			} else if (Utils.isArray(nodes)) {	// Array of node objects
				for (var i = 0; i < nodes.length; i++) {
					self.insert(nodes[i].key, nodes[i].value);
				}
			} else {
				for (var k in nodes) {	//Object with key-value
					self.insert(k, nodes[k]);
				}
			}
		};

		this.keys = function () {
			var keys = [];
			for (var i = 0; i < _nodes.length; i++) {
				keys.push(_nodes[i].key);
			}
			return keys;
		};

		this.values = function () {
			var vals = [];
			for (var i = 0; i < _nodes.length; i++) {
				vals.push(_nodes[i].value);
			}
			return vals;
		};

		this.peek = function () {
			return _nodes.length ? _nodes[0].value : undefined;
		};

		this.size = function () {
			return _nodes.length;
		};

		//Insert a key, value into the heap.
		this.insert = function (k, v) {
			if (k === undefined || k === null) throw new Error('undefined or null key is not allowed');
			var node = { key: k, value: v };
			_nodes.push(node);

			for (var i = _nodes.length - 1; i > 0; ) {
				var parentIndex = (i - 1) >> 1;
				if (_nodes[parentIndex].key <= k) break;
				_nodes[i] = _nodes[parentIndex];
				i = parentIndex;
			}
			_nodes[i] = node;
		};

		_init();
	}

	if (module && module.exports) {
		module.exports = Heap;
	} else if (exports) {
		exports = Heap;
	} else {
		this.Heap = Heap
	}

})();
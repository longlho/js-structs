(function () {

	var Heap = function (heap) {

		var _nodes
			, _this;

		//Move the node to its proper place
		var _moveUp = function (i) {
			var node = _nodes[i]
				, parentIndex;
			for (; i > 0; parentIndex = (i - 1) >> 1) {
				if (_nodes[parentIndex].key <= node.key) break;
				_nodes[i] = _nodes[parentIndex];
				i = parentIndex;
			}
			// while (i > 0) {
			// 	var parentIndex = (i - 1) >> 1;
			// 	if (_nodes[parentIndex].key <= node.key) break;
			// 	_nodes[i] = _nodes[parentIndex];
			// 	i = parentIndex;
			// }
			_nodes[i] = node;
		};

		//Initialization
		(function () {
			_nodes = [];			
			if (heap) {
				_this.insertAll(heap);
			}
		})();

		this.insertAll = function (nodes) {

		};

		this.peek = function () {
			return _nodes.length ? _nodes[0].value : undefined;
		};

		this.getSize = function () {
			return _nodes.length;
		};

		//Insert a key, value into the heap.
		this.insert = function (k, v) {
			if (k === undefined || k === null) throw new Error('undefined or null key is not allowed');
			var node = { key: k, value: v };
			_nodes.push(node);

			for (var i = _nodes.length; i > 0; ) {
				var parentIndex = (i - 1) >> 1;
				if (_nodes[parentIndex].key <= k) break;
				_nodes[i] = _nodes[parentIndex];
				i = parentIndex;
			}
			// while (i > 0) {
			// 	var parentIndex = (i - 1) >> 1;
			// 	if (_nodes[parentIndex].key <= node.key) break;
			// 	_nodes[i] = _nodes[parentIndex];
			// 	i = parentIndex;
			// }
			_nodes[i] = node;
		};
	}

	if (module && module.exports) {
		module.exports = Heap;
	} else {
		this.Heap = Heap
	}

})();
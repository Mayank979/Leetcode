const Node = require("./node");

module.exports = class Tree {
	constructor() {
		this.root = null;
	}

	addValue(v) {
		let value = new Node(v);
		if (this.root == null) this.root = value;
		else this.root.addNode(value);
	}

	inorder() {
		this.root.inorder();
	}
};

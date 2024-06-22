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
	preorder() {
		this.root.preorder();
	}
	postorder() {
		this.root.postorder();
	}

	bfs(targetValue) {
		return this.root.bfs(targetValue);
	}
	dfs(targetValue) {
		return this.root.dfs(targetValue);
	}
};

module.exports = class Node {
	constructor(v) {
		this.value = v;
		this.left = null;
		this.right = null;
	}

	addNode(node) {
		if (this.value > node.value) {
			if (this.left == null) this.left = node;
			else this.left.addNode(node);
		}
		if (this.value < node.value) {
			if (this.right == null) this.right = node;
			else this.right.addNode(node);
		}
	}

	inorder() {
		//console.log(this.left);
		if (this.value == null) return;
		if (this.left) this.left.inorder();
		console.log(this.value);
		if (this.right) this.right.inorder();
	}
};

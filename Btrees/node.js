module.exports = class Node {
	constructor(v) {
		this.value = v;
		this.left = null;
		this.right = null;
		this.searched = false;
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

	preorder() {
		//console.log(this.left);
		if (this.value == null) return;
		console.log(this.value);
		if (this.left) this.left.preorder();
		if (this.right) this.right.preorder();
	}

	postorder() {
		//console.log(this.left);
		if (this.value == null) return;
		if (this.left) this.left.postorder();
		if (this.right) this.right.postorder();
		console.log(this.value);
	}

	bfs(targetValue) {
		let stack = [];

		//console.log(this);
		stack.push(this);

		while (stack.length) {
			console.log("stack is", stack);
			let node = stack.shift();
			this.searched = true;
			if (node.value == targetValue) return "found";
			if (node.left && node.left.searched == false) stack.push(node.left);
			if (node.right && node.right.searched == false) stack.push(node.right);
		}
	}

	dfs(targetValue) {
		let stack = [];

		//console.log(this);
		stack.push(this);

		while (stack.length) {
			console.log("stack is", stack);
			let node = stack.pop();
			this.searched = true;
			if (node.value == targetValue) return "found";
			if (node.left && node.left.searched == false) stack.push(node.left);
			if (node.right && node.right.searched == false) stack.push(node.right);
		}
	}
};

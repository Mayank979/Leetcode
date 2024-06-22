class Graph {
	constructor() {
		this.nodes = [];
		this.graph = {};
		this.start = null;
		this.end = null;
	}

	addNode(n) {
		this.nodes.push(n);
		let title = n.value;
		this.graph[title] = n; // inserting in hashmap
	}

	getNode(actor) {
		return this.graph[actor] || null;
	}

	setStart(start) {
		return (this.setStart = this.graph[start]);
	}

	setEnd(end) {
		return (this.setEnd = this.graph[end]);
	}
}

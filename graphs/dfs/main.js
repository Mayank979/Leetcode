let data;

function preload() {
	data = loadJSON("./movies.json");
}

function setup() {
	// createCanvas(500, 500);
	// background(100);
	// console.log(data);

	let graph = new Graph();

	let movies = data.movies;

	movies.forEach(m => {
		let { title, cast } = m;
		let movieNode = new Node(title);

		graph.addNode(movieNode);

		cast.forEach(c => {
			let actorNode = graph.getNode(c);
			if (!actorNode) {
				actorNode = new Node(c);
				graph.addNode(actorNode);
			}
			movieNode.addEdge(actorNode);
		});
	});

	let start = graph.setStart("Priyanka Chopra Jonas");
	let end = graph.setEnd("Amanda Seyfried");

	console.log({ start, end });

	console.log(graph);

	let queue = [];

	start.searched = true;
	queue.push(start);
	while (queue.length > 0) {
		let current = queue.shift();
		if (current == end) {
			console.log("found");
			break;
		}
		current.edges.forEach(edge => {
			if (!edge.searched) {
				edge.searched = true;
				edge.parent = current;
				queue.push(edge);
			}
		});
	}

	let path = [];

	path.push(end);
	let next = end.parent;
	while (next) {
		path.push(next);
		next = next.parent;
	}
	console.log(path);

	let text = "";
	for (let i = path.length - 1; i >= 0; i--) {
		text += path[i].value + " -->";
	}
	createP(text);
}

function draw() {}

const Tree = require("./tree");

let a = new Tree();

for (let i = 0; i < 4; i++) {
	let val = Math.floor(Math.random() * 100);
	console.log("val is", val);
	a.addValue(val);
}

console.log(a);
a.inorder();

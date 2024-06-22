const Tree = require("./tree");

let a = new Tree();
let values = [];

let arr = [20, 9, 25, 5, 12, 11, 14];

// for (let i = 0; i < 10; i++) {
// 	let val = Math.floor(Math.random() * 100);
// 	values.push(val);
// 	console.log("val is", val);
// 	a.addValue(val);
// }

arr.forEach(val => {
	//let val = Math.floor(Math.random() * 100);
	values.push(val);
	console.log("val is", val);
	a.addValue(val);
});

let targetValue = values[Math.floor(Math.random() * 10)];

console.log(JSON.stringify(a), targetValue);

// console.log(a.dfs(targetValue));

a.inorder();
// console.log("pre order traversal");
// a.preorder();
// console.log("post order traversal");
// a.postorder();

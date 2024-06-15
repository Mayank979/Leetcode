const callMe = () => {
	const nums = [2, 3, 5];
	let rob1 = 0,
		rob2 = 0;

	// [rob1, rob2, n, n+1, n+2 .....]
	for (let n of nums) {
		let temp = Math.max(n + rob1, rob2);
		rob1 = rob2;
		rob2 = temp;
	}
	return rob2;
};

console.log(callMe());

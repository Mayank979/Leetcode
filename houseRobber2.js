const callMe = () => {
	let nums = [2, 3, 2];
	return Math.max(houseRobber(nums.slice(1), houseRobber(nums.slice(0, -1))));
};

function houseRobber(nums) {
	let rob1 = 0,
		rob2 = 0;
	for (let n of nums) {
		let temp = Math.max(n + rob1, rob2);
		rob1 = rob2;
		rob2 = temp;
	}

	return rob2;
}

console.log(callMe());

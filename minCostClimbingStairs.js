const callMe = () => {
	let nums = [1, 2, 3, 4];

	console.log(nums);
	for (let i = nums.length - 3; i >= 0; i--) {
		nums[i] = Math.min(nums[i] + nums[i + 1], nums[i] + nums[i + 2]);
	}
	return Math.min(nums[0], nums[1]);
};

console.log(callMe());

const threeSum = () => {
	const nums = [-3, 3, -3, 1, 2, 4];
	let res = [];

	nums.sort((a, b) => a - b);

	console.log(nums);

	for (let i = 0; i < nums.length; i++) {
		const n = nums[i];
		if (n > 0) break;
		if (i > 0 && nums[i] === nums[i - 1]) continue;

		let l = i + 1;
		let r = nums.length - 1;
		while (l < r) {
			const threesum = n + nums[l] + nums[r];
			if (threesum === 0) {
				res.push(n, nums[l], nums[r]);
				l++;
				r--;
				while (nums[l] === nums[l - 1] && l < r) {
					l++;
				}
			} else if (threesum < 0) l++;
			else r--;
		}
	}

	return res;
};

console.log(threeSum());

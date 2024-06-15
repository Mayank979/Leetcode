function productExceptSelf(nums) {
	const result = [];
	let prefix = 1;
	let postfix = 1;

	for (let i = 0; i < nums.length; i++) {
		result[i] = prefix;
		prefix *= nums[i];
	}
	console.log({ resultb4: result });
	for (let i = nums.length - 2; i >= 0; i--) {
		postfix *= nums[i + 1];
		result[i] *= postfix;
	}

	console.log({ prefix, postfix, result });

	return result;
}

console.log(productExceptSelf([-1, 1, 0, -3, 3]));

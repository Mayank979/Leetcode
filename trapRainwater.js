const callMe = () => {
	const height = [4, 2, 0, 3, 2, 5];
	let l = 0,
		r = height.length - 1;
	let maxL = height[l];
	let maxR = height[r];
	let trapped = 0;

	while (l < r) {
		if (maxL <= maxR) {
			l++;
			const currTrapped = maxL - height[l] < 0 ? 0 : maxL - height[l];
			trapped += currTrapped;
			maxL = Math.max(maxL, height[l]);
		} else {
			r--;
			const currTrapped = maxR - height[r] < 0 ? 0 : maxR - height[r];
			trapped += currTrapped;
			maxR = Math.max(maxR, height[r]);
		}
	}
	return trapped;
};

console.log(callMe());

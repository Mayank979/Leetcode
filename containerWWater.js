const callMe = () => {
	const height = [1, 1];
	let l = 0,
		r = height.length - 1;
	let area = 0;

	while (l < r) {
		const tempAr = (r - l) * Math.min(height[l], height[r]);
		area = Math.max(area, tempAr);
		if (height[l] >= height[r]) r--;
		else l++;
	}
	console.log(area);
	return area;
};

callMe();

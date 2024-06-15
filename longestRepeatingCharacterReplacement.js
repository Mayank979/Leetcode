const callMe = () => {
	let s = "ABAB";
	let k = 1;
	let max = 0;

	let count = new Map();

	let l = 0;

	for (let r = 0; r < s.length; r++) {
		let len = r - l + 1;
		count.set(s[r], 1 + (count.get(s[r]) || 0));

		if (len - Math.max(...count.values()) > k) {
			count.set(s[l], count.get(s[l]) - 1);
			l++;
		}
		len = r - l + 1;
		max = Math.max(max, len);
	}
	return max;
};

console.log(callMe());

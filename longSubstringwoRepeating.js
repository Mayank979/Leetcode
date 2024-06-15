const callMe = () => {
	let s = "pwwkew";
	if (!s.length) return 0;
	let maxLen = 1;
	for (let i = 0; i < s.length - 1; i++) {
		let set = new Set();
		set.add(s[i]);
		for (let j = i + 1; j < s.length; j++) {
			if (set.has(s[j])) break;
			set.add(s[j]);
			maxLen = Math.max(set.size, maxLen);
		}
	}
	return maxLen;
};

console.log(callMe());

const callMe = () => {
	let n = "babad";
	let len = 0;
	let result = "";
	for (let i = 0; i < n.length; i++) {
		let l = i,
			r = i;
		while (l >= 0 && r < n.length && n[l] === n[r]) {
			if (r - l + 1 > len) {
				result = n.slice(l, r + 1);
				len = r - l + 1;
			}
			l -= 1;
			r += 1;
		}
		l = i;
		r = i + 1;
		while (l >= 0 && r < n.length && n[l] === n[r]) {
			if (r - l + 1 > len) {
				result = n.slice(l, r + 1);
				len = r - l + 1;
			}
			l -= 1;
			r += 1;
		}
	}
	return result;
};

console.log(callMe());

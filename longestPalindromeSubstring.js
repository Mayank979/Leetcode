const callMe = () => {
	let str = "aaa";
	let res = 0;
	for (let i = 0; i < str.length; i++) {
		let l = i,
			r = i;
		while (l >= 0 && r < str.length && str[l] === str[r]) {
			res++;
			l -= 1;
			r += 1;
		}

		(l = i), (r = i + 1);
		while (l >= 0 && r < str.length && str[l] === str[r]) {
			res++;
			l -= 1;
			r += 1;
		}
	}
	return subs.length;
};

console.log(callMe());

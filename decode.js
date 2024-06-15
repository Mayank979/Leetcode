const callMe = () => {
	let str = "121";

	let mapper = {};

	for (let i = 0; i < 26; i++) {
		mapper[String.fromCharCode(65 + i)] = i + 1;
	}

	return decodeWays("", str, mapper);
};

function decodeWays(curr, str, mapper) {
	//if (str[0] == 0) return 0;
	// if (curr && mapper[curr]) return 1;
	// if (curr && !mapper[curr]) return 0;
	if (!str) return;

	for (let i = 0; i < str.length; i++) {
		curr = str.slice(0, 1);
		str.length == 1 ? (str = "") : (str = str.substr(1));
		console.log({ curr, str });
		decodeWays(curr, str, mapper);
	}
}

console.log(callMe());

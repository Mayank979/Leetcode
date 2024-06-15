const callMe = (str, result) => {
	if (str.length == 0) console.log(result);

	for (let i = 0; i < str.length; i++) {
		let rem = str.substring(0, i) + str.substring(i + 1);
		callMe(rem, result + str[i]);
	}
};

callMe("ABC", "");

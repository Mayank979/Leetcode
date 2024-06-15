const callMe = () => {
	let n = "9230560001";
	let sum = 71;
	let count = 0;
	let memo = {};
	return minSumsRecursive(n, sum, 0, 0);
};

console.log(callMe());

function minSumsRecursive(numbers, sum, start, additionCount) {
	if (start === numbers.length) {
		return sum === 0 ? additionCount : Infinity;
	}

	let minAdditions = Infinity;
	let currentNum = 0;

	for (let i = start; i < numbers.length; i++) {
		currentNum = currentNum * 10 + parseInt(numbers[i]);
		console.log({ currentNum });

		const remainingSum = sum - currentNum;
		const remainingAdditions =
			remainingSum === 0
				? additionCount
				: minSumsRecursive(numbers, remainingSum, i + 1, additionCount + 1);

		if (remainingAdditions !== Infinity) {
			minAdditions = Math.min(minAdditions, remainingAdditions);
		}
	}

	return minAdditions;
}

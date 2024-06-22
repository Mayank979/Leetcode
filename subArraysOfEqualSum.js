const callMe = () => {
	let a = [1, 2, 11, 5, 9];
	let sum = a.reduce((acc, v) => acc + v, 0);

	if (!a.length) return false;

	if (sum % 2 == 1) return false;

	let targetSum = sum / 2;

	let tempSum = 0;

	for (let i = 0; i < a.length; i++) {
		tempSum += a[i];
		if (tempSum == targetSum) {
			return {
				arr1: a.slice(0, i + 1),
				arr2: a.slice(i + 1),
			};
		}
	}
	return false;
	console.log(acc);
};

console.log(callMe());

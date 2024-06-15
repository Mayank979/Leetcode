const callMe = () => {
	let n = 2;
	let memo = {};
	return countWays(n, memo);
};

function countWays(n, memo) {
	if (n <= 1) return 1;

	if (memo[n]) return memo[n];

	memo[n] = countWays(n - 1, memo) + countWays(n - 2, memo);

	return memo[n];
}

console.log(callMe());

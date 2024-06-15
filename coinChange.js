const callMe = () => {
	const coins = [6, 8];
	const m = 14;

	let dp = new Array(m + 1).fill(m + 1);
	dp[0] = 0;

	for (let i = 1; i <= m; i++) {
		for (let c of coins) {
			if (i - c >= 0) {
				//console.log("m-c", i - c);
				dp[i] = Math.min(dp[i], 1 + dp[i - c]);
				console.log({ dp: dp[i], diff: i - c, c, i });
			}
		}
	}

	return dp[m] === m + 1 ? -1 : dp[m];
};

console.log(callMe());

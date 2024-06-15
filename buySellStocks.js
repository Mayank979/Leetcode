const callMe = () => {
	let prices = [2, 1, 2, 1, 0, 1, 2];
	let buy = prices[0];
	let maxP = 0;

	for (let i = 1; i < prices.length; i++) {
		if (prices[i] < buy) buy = prices[i];
		else maxP = Math.max(maxP, prices[i] - buy);
	}

	return maxP;
};

console.log(callMe());

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var topKFrequent = function (nums, k) {
	let obj = {};

	for (let n of nums) {
		if (obj[n]) {
			obj[n]++;
		} else {
			obj[n] = 1;
		}
	}

	const keysSorted = Object.keys(obj)
		.sort(function (a, b) {
			return obj[a] - obj[b];
		})
		.reverse();

	console.log(keysSorted);

	let ans = [];

	for (let i = 0; i < k; i++) {
		ans.push(parseInt(keysSorted[i]));
	}
	return ans;
};

console.log(topKFrequent([1, 2, 2, 2, 1, 1, 1, 3, 3, -1, -1, -1], 3));

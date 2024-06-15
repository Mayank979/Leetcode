const nums = [0, -1];
// nums.sort((a, b) => a - b);

// console.log(nums);

const set = new Set();

nums.forEach(n => set.add(n));

console.log(set);

let seq = 1,
	newSeq = 1;

nums.forEach(n => {
	let isStart = !set.has(n - 1);
	newSeq = 1;

	let newN = n;
	if (isStart) {
		newN++;

		while (set.has(newN)) {
			newSeq++;
			newN += 1;
		}
		seq = Math.max(seq, newSeq);
	}
});

console.log(seq);

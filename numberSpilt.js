function splitAndMultiply(num) {
	const numStr = String(num);
	const successors = [];

	// Iterate through all possible splits of the number
	for (let i = 1; i < numStr.length; i++) {
		const firstPart = Number(numStr.slice(0, i));
		const secondPart = Number(numStr.slice(i));

		// Multiply the parts to get a possible successor
		const successor = firstPart * secondPart;
		console.log(" successor is", successor);
		successors.push(successor);
	}

	return successors;
}

function longestSequence(start) {
	let sequence = [start];
	let currentNum = start;

	while (currentNum >= 10) {
		// Generate possible successors
		const successors = splitAndMultiply(currentNum);
		console.log({ successors });

		// Select the largest successor
		const largestSuccessor = Math.max(...successors);

		// Update the current number and sequence
		currentNum = largestSuccessor;
		sequence.push(currentNum);
	}

	return sequence.length;
}

// Example usage:
const startNumber = 234;
console.log(longestSequence(startNumber)); // Output: 5

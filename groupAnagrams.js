function groupAnagrams(words) {
	let map = new Map();
	for (let word of words) {
		let frequency = new Array(26).fill(0);
		for (let char of word) {
			const charCode = char.charCodeAt(0) - "a".charCodeAt(0);
			frequency[charCode]++;
		}
		const freqString = frequency.toString();
		const values = map.get(freqString) || [];
		values.push(word);
		map.set(freqString, values);
	}
	return [...map.values()];
}

console.log(groupAnagrams(["eat", "tea", "tan", "ate", "nat", "bat"]));

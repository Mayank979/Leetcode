function getColor(r, g, b, k) {
	let min = Math.min(r, g, b);
	k--;

	if (k < 3 * min) {
		console.log({ k, min3: 3 * min });
		if (k % 3 === 0) return "Red";
		return k % 3 === 1 ? "green" : "blue";
	}
	r -= min;
	b -= min;
	g -= min;
	k -= 3 * min;

	// RGB
	if (g > 0 && b > 0) {
		// r == 0
		min = Math.min(b, g);
		if (k < 2 * min) return k % 2 == 0 ? "green" : "blue";
		k -= 2 * min;
		g -= min;
		b -= min;
	} else if (r > 0 && b > 0) {
		// g == 0
		min = Math.min(b, r);
		if (k < 2 * min) return k % 2 == 0 ? "red" : "blue";
		k -= 2 * min;
		r -= min;
		b -= min;
	} else if (r > 0 && g > 0) {
		// b == 0
		min = Math.min(g, r);
		if (k < 2 * min) return k % 2 == 0 ? "red" : "green";
		k -= 2 * min;
		r -= min;
		g -= min;
	}
	if (r > 0) return "red";
	return g > 0 ? "green" : "blue";
}

// Example usage
let r = 35,
	g = 41,
	b = 37,
	k = 106;
console.log(getColor(r, g, b, k)); // Output: "RED"

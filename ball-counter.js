let r = 1000000000000,
	g = 11000000,
	b = 1,
	k = 1000000000002;

let lastBall = "";

while (k > 0) {
	if (r > 0 && k > 0) {
		console.log("red \t");
		lastBall = "Red";
		r--;
		k--;
	}
	if (g > 0 && k > 0) {
		console.log("green\t");
		lastBall = "Green";
		g--;
		k--;
	}
	if (b > 0 && k > 0) {
		console.log("blue\t");
		lastBall = "Blue";
		b--;
		k--;
	}
	if (r <= 0 && g <= 0 && k > 0) {
		lastBall = "Blue";
		break;
	}
	if (g <= 0 && b <= 0 && k > 0) {
		lastBall = "Red";
		break;
	}
	if (r <= 0 && b <= 0 && k > 0) {
		lastBall = "Green";
		break;
	}

	console.log("k is ", k);
}

console.log("ans", lastBall);

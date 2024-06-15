const marks = [10, 10, 10, 10];

let avg = 0;
let sum = 0;
let currentLength = marks.length;

marks.forEach(m => {
	sum += m;
});

avg = sum / currentLength;

if (avg >= 9.5) {
	console.log(0);
	return;
}

let timesAdded = 0;

while (avg < 9.5) {
	sum += 10;
	timesAdded++;
	currentLength++;
	avg = sum / currentLength;
}

console.log({ avg, timesAdded });

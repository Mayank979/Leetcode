const numbers = [-1, 0],
	target = -1;
let i = 0,
	j = numbers.length - 1;

let res = [];
while (i <= j) {
	let sum = numbers[i] + numbers[j];
	console.log(sum);
	if (sum === target) {
		res.push(...[i + 1, j + 1]);
		break;
	} else if (sum > target) j--;
	else i++;
}

console.log(res);

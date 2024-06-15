const rugsize = 6241;
let factorsSet = new Set();
let obj = {};

for (let i = 1; i <= rugsize; i++) {
	if (rugsize % i === 0) factorsSet.add(i);
}

let factors = [...factorsSet];
let res = [];
let count = 0;
for (let i = 0; i < factors.length; i++) {
	for (let j = i; j < factors.length; j++) {
		if (factors[i] * factors[j] === rugsize) {
			if (
				!(factors[i] % 2 === 0 && factors[j] % 2 === 0) &&
				factors[i] !== factors[j]
			) {
				count++;
				res.push([factors[i], factors[j]]);
			}
			if (factors[i] === factors[j]) {
				count++;
				res.push([factors[i], factors[j]]);
			}
		}
	}
}

console.log(factors, count, res);

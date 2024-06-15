const callMe = () => {
	let n = 5;
	return fibo(n);
};

function fibo(n) {
	if (n <= 1) return 1;

	return fibo(n - 1) + fibo(n - 2);
}

console.log(callMe());

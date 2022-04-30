const solution1 = (arr) => {
	let product = 1;
	arr.sort((a,b) => b-a);
	arr.forEach((num) => (product *= num));
	return product;
};

const solution2 = (arr) => {
	return arr.reduce((prev, curr) => prev * curr, 1);
};

const solution3 = (arr) => {
	let product = 0;
	for (let i = 0; i < arr.length; i++) {
		product = product * arr[i];
	}
	return product;
};

module.exports = {
	solution1,
	solution2,
	solution3,
};

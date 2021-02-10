function add (a, b) {
	return a + b
}

function subtract (a, b) {
	return a - b
}

function sum (arr) {
	if (arr.length == 0){
		return 0
	}
	return arr.reduce((a, b) => a + b)
}

function multiply (arr) {
	if (arr.length == 0){
		return 0
	}
	return arr.reduce((a, b) => a * b)
}

function power(a,b) {
	return a ** b
}

function factorial(x) {
	let sum = x
	if(sum === 0){
		return 1
	}
	for (let i = x - 1; i > 0; i--) {
		sum *= i
		
	}
	return sum
}

module.exports = {
	add,
	subtract,
	sum,
	multiply,
    power,
	factorial
}
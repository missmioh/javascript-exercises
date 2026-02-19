const add = function(a, b) {
	return a + b;
};

const subtract = function(a, b) {
	return a - b;
};

const sum = function(arr) {
  const reducing = arr.reduce((total, item) => total + item, 0);
  return reducing;
};

// no need for variable, just return would have worked fine

const multiply = function(arr) {
  const reducing = arr.reduce((total, item) => total * item);
  return reducing;
};

const power = function(a, b) {
	return a ** b;
};

const factorial = function(a) {
  let result = 1;

  for (let i = 2; i <= a; i++) {
    result *= i;
  }
  return result;
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};

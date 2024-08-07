const add = function (num1, num2) {
  return num1+num2
};

const subtract = function (num1, num2) {
  return num1 - num2
};

const sum = function (array) {
  return array.reduce((total, currentItem) => total + currentItem, 0);
};

const multiply = function (array) {
  return array.reduce((total, currentItem) => total * currentItem, 1)
};

const power = function (num, raise) {
  return num**raise
};

const factorial = function (num) {
  if (num === 0) return 1;
  let product = 1;
  for (let i = num; i > 0; i--) {
    product *= i;
  }
  return product
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

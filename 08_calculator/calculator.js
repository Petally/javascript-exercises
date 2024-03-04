const add = function(a, b) {
    return a + b;
};

const subtract = function(a, b) {
    return a - b;
};

const sum = function(numbers) {
    return numbers.reduce((total, currentNumber) => total + currentNumber, 0);
};

const multiply = function(numbers) {
    return numbers.reduce((total, currentNumber) => total * currentNumber);
};

const power = function(num, pow) {
    return num ** pow;
};

const factorial = function(num) {
    let factorial = 1;
    for (i = 0; i < num; i++) {
        factorial *= i + 1;
    }
    return factorial;
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

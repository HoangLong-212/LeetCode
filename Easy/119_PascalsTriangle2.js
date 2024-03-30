/**
 * @param {number} rowIndex
 * @return {number[]}
 */

//Solution 1
var getRow = function (rowIndex) {
  let result = [];
  for (let i = 0; i <= rowIndex; i++) {
      result[i] = calculator(rowIndex, i)
  }

  return result;
};

var factorialLoop = function (n) {
  let result = 1;
  for (let i = 2; i <= n; i++) {
      result *= i;
  }
  return result;
}

var calculator = function (n, k) {
  let result = factorialLoop(n) / (factorialLoop(k) * factorialLoop(n - k))
  return result;
}

//Solution 2
var getRow = function(rowIndex) {
  let result = [1];
  
  for (let i = 1; i <= rowIndex; i++) {
      result.push(result[i-1] * (rowIndex - i + 1) / i);
  }

  return result;
}
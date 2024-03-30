/**
 * @param {number} numRows
 * @return {number[][]}
 */
var generate = function (numRows) {
  var resultArr = new Array();
  for (let x = 0; x < numRows; x++) {
    resultArr[x] = [];
    for (let y = 0; y <= x; y++) {
      if (y === 0 || y === x) {
        resultArr[x][y] = 1;
      } else {
        resultArr[x][y] = resultArr[x - 1][y - 1] + resultArr[x - 1][y];
      }
    }
  }

  return resultArr;
};

// n = 1 -> result = 1
// n = 2 -> result = 2
// n = 3 -> result = 3
// n = 4 -> result = 5
// n = 5 -> result = 8
// => result[n] = result[n-1] + result[n-2]

var climbStairs = function (n) {
    let arr = new Array(n + 1);
    arr[0] = 1;
    arr[1] = 1;
    for (let i = 2; i <= n; i++) {
        arr[i] = arr[i - 1] + arr[i - 2]
    }

    return arr[n]
};
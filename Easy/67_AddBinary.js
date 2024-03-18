var addBinary = function (a, b) {
    let a1 = BigInt("0b" + a);
    let b1 = BigInt("0b" + b);
    let sum = a1 + b1;
    return sum.toString(2)
};
var plusOne = function (digits) {
  let length = digits.length;
  for (let i = length - 1; i >= 0; i--) {
    if (digits[i] === 9) {
      digits[i] = 0;
      if (i === 0) {
        digits.unshift(1);
      }
      continue;
    } else {
      digits[i] = digits[i] + 1;
      break;
    }
  }

  return digits;
};

// Welcome. In this kata, you are asked to square every digit of a number and concatenate them.
// For example, if we run 9119 through the function, 811181 will come out, because 92 is 81 and 12 is 1.
// Note: The function accepts an integer and returns an integer

const squareEveryDigit = (num) => {
  let output = '';

  for (digit of num.toString()) {
    output += (Number(digit) ** 2).toString();
  }

  // Slightly more convoluted than above but shows another approach via
  // parseInt(), forEach() and converting a string to an array using spread
  //   [...num.toString()].forEach(
  //     (digit) => (output += (parseInt(digit) ** 2).toString())
  //   );

  return Number(output);
};

console.log(squareEveryDigit(3212));

// Solutions of others
function squareDigits(num) {
  return +num
    .toString()
    .split('')
    .map((v) => [0, 1, 4, 9, 16, 25, 36, 49, 64, 81][v])
    .join('');
}

function squareDigits(num) {
  return Number(
    ('' + num)
      .split('')
      .map(function (val) {
        return val * val;
      })
      .join('')
  );
}

// You are given an array (which will have a length of at least 3, but could be very large)
// containing integers. The array is either entirely comprised of odd integers or entirely
// comprised of even integers except for a single integer N. Write a method that takes the
// array as an argument and returns this "outlier" N.

const findOutlier = (integers) => {
  let evens = 0,
    odds = 0;
  //   let odds = 0;

  for (int of integers) {
    int % 2 === 0 ? evens++ : odds++;
    if (odds > 1 || evens > 1) break;
  }

  return evens >= 2
    ? integers.filter((int) => int % 2 !== 0).shift()
    : integers.filter((int) => int % 2 === 0).shift();
};

console.log(findOutlier([2, 4, 0, 100, 4, 11, 2602, 36]));
console.log(findOutlier([160, 3, 1719, 19, 11, 13, -21]));

// Solutions of others
// 1.
function findOutlier(int) {
  var even = int.filter((a) => a % 2 == 0);
  var odd = int.filter((a) => a % 2 !== 0);
  return even.length == 1 ? even[0] : odd[0];
}

// 2.
function findOutlier(integers) {
  return integers.slice(0, 3).filter(even).length >= 2
    ? integers.find(odd)
    : integers.find(even);
}
function even(num) {
  return num % 2 == 0;
}
function odd(num) {
  return !even(num);
}

// 3.
function findOutlier(integers) {
  const even = integers.filter((int) => int % 2 === 0);
  const odd = integers.filter((int) => int % 2 !== 0);
  return even.length === 1 ? even[0] : odd[0];
}

// 4.
function findOutlier(int) {
  var evens = [],
    odds = [];
  int.forEach(function (num) {
    num % 2 != 0 ? odds.push(num) : evens.push(num);
  });
  return odds.length > 1 ? evens[0] : odds[0];
}

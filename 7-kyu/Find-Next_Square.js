// You might know some pretty large perfect squares. But what about the NEXT one?

// Complete the findNextSquare method that finds the next integral perfect square
// after the one passed as a parameter. Recall that an integral perfect square is
// an integer n such that sqrt(n) is also an integer.

// If the parameter is itself not a perfect square then -1 should be returned. You
// may assume the parameter is non-negative.

// const findNextSquare = (sq) => {
//   if (Math.sqrt(sq) % 1 !== 0) return -1;
//   while (true) {
//     if (Math.sqrt(++sq) % 1 === 0) return sq;
//   }
// };

// Lessons to learn:
// Can use truthy and falsey values in ternaries
// Should have realised that, if a square is passed in, then
// it was only necessary to take it's root, add one and
// return its square - d'oh!
// so...
const findNextSquare = (sq) => {
  return Math.sqrt(sq) % 1 ? -1 : (Math.sqrt(sq) + 1) ** 2;
};

console.log(findNextSquare(121));
console.log(findNextSquare(12));
console.log(findNextSquare(64));

// Solutions of others

// 1.
// function findNextSquare(sq) {
//   return Math.sqrt(sq) % 1 ? -1 : Math.pow(Math.sqrt(sq) + 1, 2);
// }

// 2.
// function findNextSquare(sq) {
//   var number = Math.sqrt(sq);
//   if (Math.round(number) === number) {
//     return Math.pow(++number, 2);
//   }
//   return -1;
// }

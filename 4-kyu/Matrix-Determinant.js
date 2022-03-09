// help

// Recursion with two base cases - sort of

const determinant = (m) => {
  const n = m.length;

  // cater first for a 1x1 matrix
  if (n === 1) {
    return m[0][0];
  }

  // now the more useful base case - that of a 2x2 matrix
  if (n === 2) {
    return m[0][0] * m[1][1] - m[0][1] * m[1][0];
  }

  let det = 0;

  for (let i = 0; i < n; i++) {
    // n smaller sqaure matrices created in total,
    // each with a dimension of n-1
    let smallerMatrix = [];
    for (let j = 1; j < n; j++) {
      // need more than a shallow copy here
      let matrixCopy = m.map((row) => [...row]);
      // remove element at column i
      matrixCopy[j].splice(i, 1);
      // insert new row into smaller matrix
      smallerMatrix.push(matrixCopy[j]);
    }
    det += (-1) ** i * m[0][i] * determinant(smallerMatrix);
  }

  return det;
};

m1 = [
  [1, 3],
  [2, 5],
];
m2 = [
  [2, 5, 3],
  [1, -2, -1],
  [1, 3, 4],
];

// console.log(determinant([[1]]));
// console.log(determinant(m1));
console.log(determinant(m2));

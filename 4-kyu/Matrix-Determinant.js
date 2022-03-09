// help

// Recursion with two base cases - sort of

const determinant = (m) => {
  // it is assumed that m is an array of array(s) making a square matrix

  // cater first for a 1x1 matrix
  if (m.length === 1) {
    return m[0][0];
  }

  // now the more useful base case - that of a 2x2 matrix
  if (m.length === 2) {
    return m[0][0] * m[1][1] - m[0][1] * m[1][0];
  }

  // now the recursive step, which will deal with any square matrix
  // of size greater than 2x2 - generalised to be of size n

  // the dimension of the square matrix
  const n = m.length;

  let det = 0;

  for (let i = 0; i < n; i++) {
    // n smaller sqaure matrices created in total,
    // each with a dimension of n-1
    let smallermatrix = [];
    for (let j = 1; j < n; j++) {
      // need more than a shallow copy here
      let matrixCopy = m.map((row) => [...row]);
      // remove element at column i
      matrixCopy[j].splice(i, 1);
      // insert new row into smaller matrix
      smallermatrix.push(matrixCopy[j]);
    }
    det += (-1) ** i * m[0][i] * determinant(smallermatrix);
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

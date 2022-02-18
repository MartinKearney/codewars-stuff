// In DNA strings, symbols "A" and "T" are complements of each other, as "C" and "G".
// You function receives one side of the DNA (string, except for Haskell); you need to
// return the other complementary side. DNA strand is never empty or there is no DNA
// at all (again, except for Haskell).

// dnaStrand []        `shouldBe` []
// dnaStrand [A,T,G,C] `shouldBe` [T,A,C,G]
// dnaStrand [G,T,A,T] `shouldBe` [C,A,T,A]
// dnaStrand [A,A,A,A] `shouldBe` [T,T,T,T]

// My Solution

const DNAStrand = (dna) => {
  const mapping = {
    A: 'T',
    T: 'A',
    C: 'G',
    G: 'C',
  };
  return dna
    .split('')
    .map((letter) => mapping[letter])
    .join('');
};

console.log(DNAStrand('ATGC'));

// Solutions of others
// 1.
function DNAStrand(dna) {
  return dna.replace(/./g, function (c) {
    return DNAStrand.pairs[c];
  });
}

DNAStrand.pairs = {
  A: 'T',
  T: 'A',
  C: 'G',
  G: 'C',
};

// 2.
var pairs = { A: 'T', T: 'A', C: 'G', G: 'C' };

function DNAStrand(dna) {
  return dna
    .split('')
    .map(function (v) {
      return pairs[v];
    })
    .join('');
}

// 3.
let pairs = { A: 'T', T: 'A', C: 'G', G: 'C' };
const DNAStrand = (dna) => dna.replace(/./g, (c) => pairs[c]);

// 4.
function DNAStrand(dna) {
  return dna
    .replace(/A/g, 't')
    .replace(/T/g, 'a')
    .replace(/C/g, 'g')
    .replace(/G/g, 'c')
    .toUpperCase();
}

// 5.
function DNAStrand(dna) {
  return dna
    .split('')
    .map(function (v) {
      return { A: 'T', T: 'A', C: 'G', G: 'C' }[v];
    })
    .join('');
}

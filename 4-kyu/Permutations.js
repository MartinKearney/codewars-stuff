// In this kata you have to create all permutations of an input string
// and remove duplicates, if present. This means, you have to shuffle
// all letters from the input in all possible orders.

// Examples:

// permutations('a'); // ['a']
// permutations('ab'); // ['ab', 'ba']
// permutations('aabb'); // ['aabb', 'abab', 'abba', 'baab', 'baba', 'bbaa']

// The order of the permutations doesn't matter.

const permutations = (inputString) => {
  const validPerms = [];

  const permsGetter = (inputArray, permString = '') => {
    if (inputArray.length === 1) {
      const newPermString = permString + inputArray[0];
      if (validPerms.indexOf(newPermString) === -1) {
        validPerms.push(newPermString);
      }
    } else {
      for (const [i, ch] of inputArray.entries()) {
        const inputArrayCopy = [...inputArray];
        inputArrayCopy.splice(i, 1);
        permsGetter(inputArrayCopy, permString + inputArray[i]);
      }
    }
  };

  permsGetter([...inputString]);

  return validPerms;
};

console.log(permutations('ben'));
console.log(permutations('aabb'));

// I like to think my code reads better than many of the solutions of others due
// my chosen variable names. But, my solution seems a bit round-the-houses - I'd
// better aquaint myself more thoroughly with reduce() and Set().

// Solutions of others
// 1.
function permutations(str) {
  return str.length <= 1
    ? [str]
    : Array.from(
        new Set(
          str
            .split('')
            .map((char, i) =>
              permutations(str.substr(0, i) + str.substr(i + 1)).map(
                (p) => char + p
              )
            )
            .reduce((r, x) => r.concat(x), [])
        )
      );
}

//  2.
const unique = (xs) => [...new Set(xs)];
const concat = (a, b) => [...a, ...b];
const drop = (i) => (xs) => [...xs.slice(0, i), ...xs.slice(i + 1)];

const permute = (x, i, xs) => combinations(drop(i)(xs)).map((y) => x + y);

const combinations = (s) =>
  s.length === 1 ? [s] : [...s].map(permute).reduce(concat);

const permutations = (s) => unique(combinations(s));

// 3.
function permutations(string) {
  return string.length == 1
    ? [string]
    : string
        .split('')
        .map((e, i) =>
          permutations(string.slice(0, i) + string.slice(i + 1)).map(
            (e2) => e + e2
          )
        )
        .reduce((r, e) => r.concat(e))
        .sort()
        .filter((e, i, a) => i == 0 || a[i - 1] != e);
}

// 4.
const permutations = (string) =>
  string.length < 2
    ? [string]
    : [...string].reduce(
        (pre, val, idx) =>
          string.indexOf(val) === idx
            ? [
                ...pre,
                ...permutations(
                  string.slice(0, idx) + string.slice(idx + 1)
                ).map((v) => val + v),
              ]
            : pre,
        []
      );

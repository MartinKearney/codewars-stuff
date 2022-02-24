// Take in an integer and return a string
// No more than 3 of same symbol consecutively

const encode = (num) => {
  let codeString = '';
  let r = 0;
  const codes = ['M', 'D', 'C', 'L', 'X', 'V', 'I'];
  const units = [1000, 500, 100, 50, 10, 5, 1];

  const updateCodeString = (n, i) => {
    let plurality = Math.floor(n / units[i]);
    codeString += codes[i].repeat(plurality);
  };

  // Special case for 1000s
  updateCodeString(num, 0);
  r = num % units[0];

  for (let i = 1; i < codes.length; i++) {
    if (i % 2 !== 0) {
      if (r >= 0.9 * units[i - 1]) {
        codeString += codes[i + 1] + codes[i - 1];
        r %= 0.9 * units[i - 1];
      } else {
        updateCodeString(r, i);
        r %= units[i];
      }
    } else {
      if (r >= 0.8 * units[i - 1]) {
        codeString += codes[i] + codes[i - 1];
        r %= 0.8 * units[i - 1];
      } else {
        updateCodeString(r, i);
        r %= units[i];
      }
    }
    if (r === 0) {
      break;
    }
  }
  return codeString;
};

console.log(encode(1000));
console.log(encode(1973));

// Turns out my solution is not the longest, but not far off!
// Should have thought to have done it via a mapping which included 900 etc
// Solutions of others:
// 1.
function solution(number) {
  var roman = {
    M: 1000,
    CM: 900,
    D: 500,
    CD: 400,
    C: 100,
    XC: 90,
    L: 50,
    XL: 40,
    X: 10,
    IX: 9,
    V: 5,
    IV: 4,
    I: 1,
  };

  var ans = '';
  while (number > 0) {
    for (a in roman) {
      if (roman[a] <= number) {
        ans += a;
        number -= roman[a];
        break;
      }
    }
  }
  return ans;
}

// 2.
function solution(number) {
  let map = {
      M: 1000,
      CM: 900,
      D: 500,
      CD: 400,
      C: 100,
      XC: 90,
      L: 50,
      XL: 40,
      X: 10,
      IX: 9,
      V: 5,
      IV: 4,
      I: 1,
    },
    ans = '';
  for (let key in map) {
    while (number >= map[key]) {
      ans += key;
      number -= map[key];
    }
  }
  return ans;
}

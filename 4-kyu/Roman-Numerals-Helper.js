class RomanNumerals {
  static roman = {
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
  static toRoman = (num) => {
    let ans = '';
    for (let key in RomanNumerals.roman) {
      while (num >= RomanNumerals.roman[key]) {
        ans += key;
        num -= RomanNumerals.roman[key];
      }
    }
    return ans;
  };
  static fromRoman = (str) => {
    let ans = 0;
    let chars = [...str];
    for (let i = 0; i < chars.length; i++) {
      if (
        RomanNumerals.roman[chars[i]] >= RomanNumerals.roman[chars[i + 1]] ||
        i === chars.length - 1
      ) {
        ans += RomanNumerals.roman[chars[i]];
      } else {
        ans += RomanNumerals.roman[`${chars[i]}${chars[i + 1]}`];
        i++;
      }
    }
    return ans;
  };
}

console.log(RomanNumerals.toRoman(1990));
console.log(RomanNumerals.fromRoman('MCMXC'));

// Solutions of others
// 1.
// TODO: create a RomanNumerals helper object
var numerals = [
  ['M', 1000],
  ['CM', 900],
  ['D', 500],
  ['CD', 400],
  ['C', 100],
  ['XC', 90],
  ['L', 50],
  ['XL', 40],
  ['X', 10],
  ['IX', 9],
  ['V', 5],
  ['IV', 4],
  ['I', 1],
];

RomanNumerals = {
  toRoman: function (v) {
    var s = '';
    numerals.forEach(function (n) {
      while (v >= n[1]) {
        s += n[0];
        v -= n[1];
      }
    });
    return s;
  },
  fromRoman: function (s) {
    var v = 0;
    numerals.forEach(function (n) {
      while (s.substr(0, n[0].length) == n[0]) {
        s = s.substr(n[0].length);
        v += n[1];
      }
    });
    return v;
  },
};

//   2.
const map = {
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

class RomanNumerals {
  static toRoman(num) {
    let str = '';
    for (var i in map) {
      while (num >= map[i]) {
        str += i;
        num -= map[i];
      }
    }
    return str;
  }

  static fromRoman(str) {
    return str
      .match(/CM|CD|XC|XL|IX|IV|\w/g)
      .reduce((acc, el) => acc + map[el], 0);
  }
}

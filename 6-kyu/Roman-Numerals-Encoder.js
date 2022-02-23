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

  for (let i = 0; i < codes.length; i++) {
    if (i === 0) {
      // Special case for 1000s
      updateCodeString(num, i);
      r = num % units[i];
      continue;
    }
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
  }

  //   // Thousands
  //   const nThousands = Math.floor(num / 1000);
  //   const Thousands = 'M'.repeat(nThousands);
  //   r = num % 1000;
  //   codeString += Thousands;

  //   // Five Hundreds
  //   if (r >= 0.9 * 1000) {
  //     codeString += 'CM';
  //     r %= 0.9 * 1000;
  //   } else {
  //     const nFiveHundreds = Math.floor(r / 500);
  //     const FiveHundreds = 'D'.repeat(nFiveHundreds);
  //     r %= 500;
  //     codeString += FiveHundreds;
  //   }

  //   // Hundreds
  //   if (r >= 0.8 * 500) {
  //     codeString += 'CD';
  //     r %= 0.8 * 500;
  //   } else {
  //     const nHundreds = Math.floor(r / 100);
  //     const Hundreds = 'C'.repeat(nHundreds);
  //     r %= 100;
  //     codeString += Hundreds;
  //   }

  //   // Fifties
  //   if (r >= 0.9 * 100) {
  //     codeString += 'XC';
  //     r %= 0.9 * 100;
  //   } else {
  //     const nFifties = Math.floor(r / 50);
  //     const Fifties = 'L'.repeat(nFifties);
  //     r %= 50;
  //     codeString += Fifties;
  //   }

  //   // Tens
  //   if (r >= 0.8 * 50) {
  //     codeString += 'XL';
  //     r %= 0.8 * 50;
  //   } else {
  //     const nTens = Math.floor(r / 10);
  //     const Tens = 'X'.repeat(nTens);
  //     r %= 10;
  //     codeString += Tens;
  //   }

  //   // Fives
  //   if (r >= 0.9 * 10) {
  //     codeString += 'IX';
  //     r %= 0.9 * 10;
  //   } else {
  //     const nFives = Math.floor(r / 5);
  //     const Fives = 'V'.repeat(nFives);
  //     r %= 5;
  //     codeString += Fives;
  //   }

  //   // Ones
  //   if (r >= 0.8 * 5) {
  //     codeString += 'IV';
  //     r %= 0.8 * 5;
  //   } else {
  //     const nOnes = Math.floor(r / 1);
  //     const Ones = 'I'.repeat(nOnes);
  //     codeString += Ones;
  //   }

  return codeString;
};

// console.log(encode(3869));
// console.log(encode(900));
console.log(encode(1000));
console.log(encode(1973));

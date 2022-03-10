const removeZeros = (array) => {
  // Sort "array" so that all elements with the value of zero are moved to the
  // end of the array, while the other elements maintain order.
  // [0, 1, 2, 0, 3] --> [1, 2, 3, 0, 0]
  // Zero elements also maintain order in which they occurred.
  // [0, "0", 1, 2, 3] --> [1, 2, 3, 0, "0"]

  // Do not use any temporary arrays or objects. Additionally, you're not able
  // to use any Array or Object prototype methods such as .shift(), .push(), etc

  // the correctly sorted array should be returned.

  // below is nice but not allowed!
  //   let shift = 0;
  //   for (let i = 0; i < array.length; i++) {
  //     if (array[i - shift] == 0) {
  //       let elt = array.splice(i - shift, 1);
  //       array.push(...elt);
  //       shift++;
  //     }
  //   }

  let zerosFound = 0;
  for (let i = 0; i < array.length - zerosFound; i++) {
    console.log('Looking at index', i);
    if (array[i] === 0 || array[i] === '0') {
      zerosFound++;
      console.log('Zero found at index', i);
      // move elt at index i to end of array
      for (let j = i; j < array.length - 1; j++) {
        let a = array[j];
        let b = array[j + 1];
        array[j] = b;
        array[j + 1] = a;
        console.log('Array after swap', array);
      }
      // ensure search is resumed at same index as last zero was found
      i--;
    }
  }

  return array;
};

// console.log(removeZeros([1, 2, 0, 3, '0']));
// console.log(removeZeros([0, 1, 2, '0', 3]));
// console.log(removeZeros([1, 2, 4, 3, 0]));
console.log(removeZeros([0, 0, 0, '0', 0]));

// Other solutions
// 1.
function removeZeros(array) {
  const head = [];
  const tail = [];
  for (const e of array) {
    if (e === 0 || e === '0') {
      tail[tail.length] = e;
    } else {
      head[head.length] = e;
    }
  }
  return [...head, ...tail];
}

// 2. !
removeZeros = (arr) =>
  arr['fi' + 'lter']((e) => e !== 0 && e !== '0')['conc' + 'at'](
    arr['filt' + 'er']((e) => e === 0 || e === '0')
  );

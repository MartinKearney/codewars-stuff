const getPINs = (observed) => {
  const options = [
    ['8', '0'],
    ['1', '2', '4'],
    ['1', '2', '3', '5'],
    ['2', '3', '6'],
    ['1', '4', '5', '7'],
    ['2', '4', '5', '6', '8'],
    ['3', '5', '6', '9'],
    ['4', '7', '8'],
    ['5', '7', '8', '9', '0'],
    ['6', '8', '9'],
  ];

  const inputNums = [...observed];
  const pinVariables = inputNums.map((num) => options[Number(num)]);

  if (pinVariables.length === 1) {
    return pinVariables[0];
  }

  const joinedArray = (arr1, arr2) =>
    arr1.map((elt1) => arr2.map((elt2) => elt1 + elt2)).flat();

  let pins = [];

  // for (let i = 0; i < pinVariables.length - 1; i++) {
  //   i === 0
  //     ? (pins = joinedArray(pinVariables[0], pinVariables[1]))
  //     : (pins = joinedArray(pins, pinVariables[i + 1]));
  // }

  for (let i = 0; i < pinVariables.length - 1; i++) {
    if (i === 0) {
      pins = joinedArray(pinVariables[0], pinVariables[1]);
      console.log('i=0', pins);
    } else {
      pins = joinedArray(pins, pinVariables[i + 1]);
      console.log(`i=${i} ${pins}`);
    }
  }

  return [...pins];
};

console.log(getPINs('123'));

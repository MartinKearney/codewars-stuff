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

  // need a new function here as codewars is running a version
  // of node which doesn't support flat() :(
  // const joinedArray = (arr1, arr2) =>
  //   arr1.map((elt1) => arr2.map((elt2) => elt1 + elt2)).flat();

  const joinedArray = (arr1, arr2) => {
    const newArray = [];
    for (let i = 0; i < arr1.length; i++) {
      for (let j = 0; j < arr2.length; j++) {
        newArray.push(arr1[i] + arr2[j]);
      }
    }
    return newArray;
  };

  let pins = [];

  for (let i = 0; i < pinVariables.length - 1; i++) {
    i === 0
      ? (pins = joinedArray(pinVariables[0], pinVariables[1]))
      : (pins = joinedArray(pins, pinVariables[i + 1]));
  }

  return pins;
};

console.log(getPINs('123'));

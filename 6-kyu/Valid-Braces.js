// Write a function that takes a string of braces, and determines if the order
// of the braces is valid. It should return true if the string is valid, and
// false if it's invalid.

// This Kata is similar to the Valid Parentheses Kata, but introduces new
// characters: brackets [], and curly braces {}. Thanks to @arnedag for the idea!

// All input strings will be nonempty, and will only consist of parentheses,
// brackets and curly braces: ()[]{}.

// What is considered Valid?
// A string of braces is considered valid if all braces are matched with the correct brace.

// Examples

// "(){}[]"   =>  True
// "([{}])"   =>  True
// "(}"       =>  False
// "[(])"     =>  False
// "[({})](]" =>  False

const validBraces = (braces) => {
  if (braces.length % 2 !== 0) return false;
  const closerStack = [];
  const lefts = ['(', '[', '{'];
  const rights = [')', ']', '}'];
  [...braces].forEach((b) => {
    let leftFound = lefts.indexOf(b);
    let rightFound = rights.indexOf(b);
    if (leftFound !== -1) {
      closerStack.push(rights[leftFound]);
    }
    if (rights[rightFound] === closerStack[closerStack.length - 1]) {
      closerStack.pop();
    }
  });
  return closerStack.length === 0;
};

// Solutions of others
// 1.
// A bit simpler than mine - would be better with 'forEach'
// Good idea to set up a matches object - main difference with mine
function validBraces(braces) {
  var matches = { '(': ')', '{': '}', '[': ']' };
  var stack = [];
  var currentChar;

  for (var i = 0; i < braces.length; i++) {
    currentChar = braces[i];

    if (matches[currentChar]) {
      // opening braces
      stack.push(currentChar);
    } else {
      // closing braces
      if (currentChar !== matches[stack.pop()]) {
        return false;
      }
    }
  }

  return stack.length === 0; // any unclosed braces left?
}

// 2.
// Clever idea - I didn't think about the problem this way
function validBraces(braces) {
  while (
    braces.indexOf('{}') != -1 ||
    braces.indexOf('()') != -1 ||
    braces.indexOf('[]') != -1
  ) {
    braces = braces.replace('{}', '').replace('()', '').replace('[]', '');
  }
  return braces.length == 0;
}

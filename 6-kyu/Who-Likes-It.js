// You probably know the "like" system from Facebook and other pages. People can "like"
//  blog posts, pictures or other items. We want to create the text that should be
// displayed next to such an item.

// Implement the function which takes an array containing the names of people that like
// an item. It must return the display text as shown in the examples:

// []                                -->  "no one likes this"
// ["Peter"]                         -->  "Peter likes this"
// ["Jacob", "Alex"]                 -->  "Jacob and Alex like this"
// ["Max", "John", "Mark"]           -->  "Max, John and Mark like this"
// ["Alex", "Jacob", "Mark", "Max"]  -->  "Alex, Jacob and 2 others like this"

// Note: For 4 or more names, the number in "and 2 others" simply increases.

const whoLikesIt = (names) => {
  switch (names.length) {
    case 0:
      return 'no one likes this';
    case 1:
      return `${names[0]} likes this`;
    case 2:
      return `${names[0]} and ${names[1]} like this`;
    case 3:
      return `${names[0]}, ${names[1]} and ${names[2]} like this`;
    default:
      return `${names[0]}, ${names[1]} and ${
        names.length - 2
      } others like this`;
  }
};

console.log(whoLikesIt([]));
console.log(whoLikesIt(['Peter']));
console.log(whoLikesIt(['Jacob', 'Alex']));
console.log(whoLikesIt(['Max', 'John', 'Mark']));
console.log(whoLikesIt(['Alex', 'Jacob', 'Mark', 'Max']));

// Solutions of others

// 1. Best practice
// Has a check at the beginning of the function.
// Would be better with template strings
function likes(names) {
  names = names || [];
  switch (names.length) {
    case 0:
      return 'no one likes this';
      break;
    case 1:
      return names[0] + ' likes this';
      break;
    case 2:
      return names[0] + ' and ' + names[1] + ' like this';
      break;
    case 3:
      return names[0] + ', ' + names[1] + ' and ' + names[2] + ' like this';
      break;
    default:
      return (
        names[0] +
        ', ' +
        names[1] +
        ' and ' +
        (names.length - 2) +
        ' others like this'
      );
  }
}

// 2. Cleverest
// Regular expression with callback - be clear on how this works
function likes(names) {
  var templates = [
    'no one likes this',
    '{name} likes this',
    '{name} and {name} like this',
    '{name}, {name} and {name} like this',
    '{name}, {name} and {n} others like this',
  ];
  var idx = Math.min(names.length, 4);

  return templates[idx].replace(/{name}|{n}/g, function (val) {
    return val === '{name}' ? names.shift() : names.length;
  });
}

// 3. Next cleverest
// Note the way that the value of the object's properties are obtained.
// Properties/keys are integers, hence this technique is possible
function likes(names) {
  return {
    0: 'no one likes this',
    1: `${names[0]} likes this`,
    2: `${names[0]} and ${names[1]} like this`,
    3: `${names[0]}, ${names[1]} and ${names[2]} like this`,
    4: `${names[0]}, ${names[1]} and ${names.length - 2} others like this`,
  }[Math.min(4, names.length)];
}

// 4.
// Again, make sure to understand what's going on here...regexp!
function likes(names) {
  var format =
    {
      0: 'no one likes this',
      1: '{0} likes this',
      2: '{0} and {1} like this',
      3: '{0}, {1} and {2} like this',
    }[names.length] || '{0}, {1} and {n} others like this';

  return format.replace(/{([\dn])}/g, function (_, n) {
    return n == 'n' ? names.splice(2).length : names[parseInt(n, 10)];
  });
}

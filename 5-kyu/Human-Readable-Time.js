// Write a function, which takes a non-negative integer (seconds) as input
// and returns the time in a human-readable format (HH:MM:SS)

//     HH = hours, padded to 2 digits, range: 00 - 99
//     MM = minutes, padded to 2 digits, range: 00 - 59
//     SS = seconds, padded to 2 digits, range: 00 - 59

// The maximum time never exceeds 359999 (99:59:59)

const getTime = (seconds) => {
  const wholeMinutes = Math.floor(seconds / 60);
  let h = Math.floor(wholeMinutes / 60).toString();
  let m = Math.floor(wholeMinutes % 60).toString();
  let s = Math.floor(seconds % 60).toString();

  h = Number(h) < 10 ? '0' + h : h;
  m = Number(m) < 10 ? '0' + m : m;
  s = Number(s) < 10 ? '0' + s : s;

  return `${h}:${m}:${s}`;
};

console.log(getTime(3740));

// Solutions of others
// 1.
// Used a custom padding function
// parseInt takes a whole number from a decimal also
function humanReadable(seconds) {
  var pad = function (x) {
    return x < 10 ? '0' + x : x;
  };
  return (
    pad(parseInt(seconds / (60 * 60))) +
    ':' +
    pad(parseInt((seconds / 60) % 60)) +
    ':' +
    pad(seconds % 60)
  );
}

// 2.
function humanReadable(seconds) {
  var hours = parseInt(seconds / 3600);
  var minutes = parseInt(seconds / 60) % 60;
  var seconds = seconds % 60;

  var pad = function (val) {
    return val < 10 ? '0' + val : val;
  };

  return pad(hours) + ':' + pad(minutes) + ':' + pad(seconds);
}
